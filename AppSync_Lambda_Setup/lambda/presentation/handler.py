import json
from http import HTTPStatus
import psycopg2
from psycopg2.extras import execute_values

DB_HOST = "localhost"
DB_PORT = "5432"
DB_NAME = "Walkin"
DB_USER = "postgres"
DB_PASSWORD = "root"


def get_db_connection():
    connection = psycopg2.connect(
        host=DB_HOST, port=DB_PORT, dbname=DB_NAME, user=DB_USER, password=DB_PASSWORD
    )
    return connection


def close_db_connection(connection):
    if connection:
        connection.close()


def handle_graphql(event, context):
    print("hello")
    event = json.loads(event["body"])
    print("hello2")
    print(event)
    data = []
    if type(event) == list:
        for each_event in event:
            data.append(handle_each_request(each_event))
    else:
        data = handle_each_request(event)

    return data


def handle_each_request(event):
    field_name = event["info"]["fieldName"]
    # event_source = event["source"]
    event_arguments = event["arguments"]

    data = []

    # PostgreSQL database operations
    if field_name == "AllWalkInDrives":
        connection = get_db_connection()
        try:
            cursor = connection.cursor()

            cursor.execute('SELECT * FROM "walk_in_drive" ')
            results = cursor.fetchall()

            jobRoles_query = """
                SELECT
                    jr.job_title,jr.id
                FROM
                    job_role jr
                JOIN
                    drive_has_job_role dhjr ON dhjr.job_role_id = jr.id
                WHERE
                    dhjr.drive_id = %s
            """

            timeSlots_query = """
                SELECT
                    ts.slot_timings,ts.id
                FROM
                    time_slot ts
                JOIN
                    drive_has_time_slot dhts ON dhts.time_slot_id = ts.id   
                WHERE
                    dhts.drive_id = %s
            """

            for row in results:
                cursor.execute(jobRoles_query, (row[0],))
                print(row[0])
                job_roles_tuples = cursor.fetchall()
                # print(job_roles_tuples)
                # job_roles = [role for role in job_roles_tuples]
                job_roles = [
                    {"job_title": title, "id": job_id}
                    for title, job_id in job_roles_tuples
                ]

                cursor.execute(timeSlots_query, (row[0],))
                time_slots_tuples = cursor.fetchall()
                # print(time_slots_tuples)
                time_slots = [
                    {"time_slot": slot, "id": id} for slot, id in time_slots_tuples
                ]

                drive_data = {
                    "id": row[0],
                    "guid": row[1],
                    "drive_title": row[2],
                    "start_date": str(row[3]),
                    "end_date": str(row[4]),
                    "location": row[5],
                    "dt_created": str(row[6]),
                    "dt_modified": str(row[7]),
                    "jobRoles": job_roles,
                    "timeSlots": time_slots,
                }
                data.append(drive_data)
                # print(data)

        finally:
            cursor.close()
            close_db_connection(connection)

    elif field_name == "DriveDetailsByID":

        connection = get_db_connection()

        drive_guid = event_arguments["guid"]

        drive_id_query = """
            SELECT id 
            FROM walk_in_drive 
            WHERE guid = %s
        """

        job_roles_query = """
            SELECT jr.job_title,jr.package,jr.job_description,job_requirements
            FROM job_role jr
            JOIN drive_has_job_role dhjr ON jr.id = dhjr.job_role_id
            WHERE dhjr.drive_id = %s 
        """

        try:
            cursor = connection.cursor()

            cursor.execute(drive_id_query, (drive_guid,))
            drive_id = cursor.fetchone()[0]
            # print(drive_id)

            cursor.execute(job_roles_query, (drive_id,))
            job_roles = cursor.fetchall()
            # print(job_roles)

            for job_role_row in job_roles:
                print(job_role_row[0])
                job_role_dict = {
                    "job_title": job_role_row[0],
                    "package": job_role_row[1],
                    "job_description": job_role_row[2],
                    "job_requirements": job_role_row[3],
                }
                data.append(job_role_dict)
                print(data)

        finally:
            cursor.close()
            close_db_connection(connection)

    elif field_name == "Login":
        connection = get_db_connection()
        email = event_arguments["input"]["email"]
        password = event_arguments["input"]["password"]

        login_query = """
            SELECT * 
            FROM "user"
            where email = %s
        """

        cursor = connection.cursor()

        cursor.execute(login_query, (email,))
        result_data = cursor.fetchone()

        if result_data[5] == password:

            data = {
                "id": result_data[0],
                "guid": result_data[1],
                "first_name": result_data[2],
                "last_name": result_data[3],
                "email": result_data[4],
                "profile_pic": result_data[9],
                "resume": result_data[7],
            }

            # data.append(dict)
            # print(data)
        else:
            # print("Wrong Password")
            data = {"message": "Wrong Password"}
            return build_response(HTTPStatus.UNAUTHORIZED, data)
        # print(temp)

    elif field_name == "ApplyToDrive":

        connection = get_db_connection()
        try:
            user_id = event_arguments["input"]["user_id"]
            updated_resume = event_arguments["input"]["updated_resume"]
            time_slot = event_arguments["input"]["time_slot"]
            walkin_drive_id = event_arguments["input"]["walkin_drive_id"]
            jobRoles = event_arguments["input"]["jobRoles"]

            apply_drive_query = """
                INSERT INTO "applied_drive" (updated_resume , time_slot_id, walk_in_drive_id , user_id)
                VALUES (%s,%s,%s,%s)
                RETURNING id

            """

            job_role_query = """
                INSERT INTO "applied_drive_job_role" (applied_drive_id, job_role_id)
                VALUES %s
            """

            cursor = connection.cursor()

            cursor.execute(
                apply_drive_query, (updated_resume, time_slot, walkin_drive_id, user_id)
            )
            applied_drive_id = cursor.fetchone()[0]

            job_role_values = [
                (applied_drive_id, job_role_id) for job_role_id in jobRoles
            ]

            execute_values(cursor, job_role_query, job_role_values)

            connection.commit()

            print("successfull")

        except Exception as e:
            connection.rollback()
            print(f"Error submitting application: {str(e)}")
            data = {"error": "Failed to submit application"}
        finally:
            cursor.close()
            close_db_connection(connection)

    elif field_name == "CreateUser":
        connection = get_db_connection()
        try:
            cursor = connection.cursor()
            first_name = event_arguments["input"]["first_name"]
            last_name = event_arguments["input"]["last_name"]
            email = event_arguments["input"]["email"]
            password = event_arguments["input"]["password"]
            phone_no = event_arguments["input"]["phone_no"]
            resume = event_arguments["input"]["resume"]
            portfolio_url = event_arguments["input"].get("portfolio_url", None)
            profile_pic = event_arguments["input"].get("profile_pic", None)
            jobRoles = event_arguments["input"]["jobRoles"]

            educationalQualifications = event_arguments["input"][
                "educationalQualifications"
            ]
            aggregate_percentage = educationalQualifications["aggregate_percentage"]
            passing_year = educationalQualifications["passing_year"]
            degree = educationalQualifications["degree"]
            stream = educationalQualifications["stream"]
            college = educationalQualifications["college"]
            college_city = educationalQualifications["college_city"]

            professionalQualifications = event_arguments["input"][
                "professionalQualifications"
            ]
            applicant_type = professionalQualifications["applicant_type"]
            applied_test = professionalQualifications["applied_test"]
            applied_test_role = professionalQualifications.get(
                "applied_test_role", None
            )

            familiarTechnologies = professionalQualifications["familiarTechnologies"]

            experienced_qualification = professionalQualifications.get(
                "experienced_qualification", None
            )

            # insert user
            print("Inserting data into 'user' table...")
            user_query = """ 
                INSERT INTO "user" (first_name, last_name, email, password, phone_no, resume, portfolio_url, profile_pic)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id

            """
            cursor.execute(
                user_query,
                (
                    first_name,
                    last_name,
                    email,
                    password,
                    phone_no,
                    resume,
                    portfolio_url,
                    profile_pic,
                ),
            )

            user_id = cursor.fetchone()[0]
            print("User ID:", user_id)

            # user job role mapping table
            print("Inserting data into user_has_job_role table...")
            user_jobRole_data = [(user_id, job_role_id) for job_role_id in jobRoles]
            user_has_job_role_query = """
                INSERT INTO user_has_job_role (user_id, job_role_id)
                VALUES %s
            """
            execute_values(cursor, user_has_job_role_query, user_jobRole_data)

            # Insert data into education_qualifications table
            print("Inserting data into educational_qualifications table...")
            cursor.execute(
                """
                INSERT INTO educational_qualifications (user_id, aggregate_percentage, passing_year, degree, stream, college, college_city)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
            """,
                (
                    user_id,
                    aggregate_percentage,
                    passing_year,
                    degree,
                    stream,
                    college,
                    college_city,
                ),
            )

            # Insert data into experienced_qualification table
            experienced_qualification_id = None
            if experienced_qualification:
                print("Inserting data into experienced_qualification table...")
                experience_year = experienced_qualification["experience_year"]
                current_ctc = experienced_qualification["current_ctc"]
                expected_ctc = experienced_qualification["expected_ctc"]
                notice_period = experienced_qualification["notice_period"]
                notice_period_end = experienced_qualification["notice_period_end"]
                notice_period_duration = experienced_qualification[
                    "notice_period_duration"
                ]
                expertiseTechnologies = experienced_qualification[
                    "expertiseTechnologies"
                ]

                cursor.execute(
                    """
                    INSERT INTO experienced_qualification (experience_year, current_ctc, expected_ctc, notice_period, notice_period_end, notice_period_duration)
                    VALUES (%s, %s, %s, %s, %s, %s)
                    RETURNING id
                """,
                    (
                        experience_year,
                        current_ctc,
                        expected_ctc,
                        notice_period,
                        notice_period_end,
                        notice_period_duration,
                    ),
                )

                experienced_qualification_id = cursor.fetchone()[0]
                print("Experienced Qualification ID:", experienced_qualification_id)

                # Insert data into expertise_technology table
                print("Inserting data into expertise_technology table...")
                expertiseTechnologies = experienced_qualification[
                    "expertiseTechnologies"
                ]
                expertise_technology_records = [
                    (experienced_qualification_id, technology_id)
                    for technology_id in expertiseTechnologies
                ]
                sql_expertise_technology = """
                    INSERT INTO expertise_technology (experienced_qualification_id, technology_id)
                    VALUES %s
                """
                execute_values(
                    cursor, sql_expertise_technology, expertise_technology_records
                )

            # Insert data into professional_qualification table
            print("Inserting data into professional_qualification table...")
            cursor.execute(
                """
                INSERT INTO professional_qualification (user_id, applicant_type, applied_test, applied_test_role, experienced_qualification_id)
                VALUES (%s, %s, %s, %s, %s)
                RETURNING id
            """,
                (
                    user_id,
                    applicant_type,
                    applied_test,
                    applied_test_role,
                    experienced_qualification_id,
                ),
            )

            professional_qualification_id = cursor.fetchone()[0]
            print("Professional Qualification ID:", professional_qualification_id)

            # Insert data into familiar_technology table
            print("Inserting data into familiar_technology table...")
            familiarTechnologies_records = [
                (professional_qualification_id, technology_id)
                for technology_id in familiarTechnologies
            ]
            sql_familiar_technology = """
                INSERT INTO familiar_technology (professional_qualification_id, technology_id)
                VALUES %s
            """
            execute_values(
                cursor, sql_familiar_technology, familiarTechnologies_records
            )
            connection.commit()

            print("Fetching user details...")
            cursor.execute(
                """
                SELECT id, guid, first_name, last_name, email, profile_pic
                FROM "user"
                WHERE id = %s
            """,
                (user_id,),
            )

            user_details = cursor.fetchone()

            data = {
                "id": user_details[0],
                "guid": user_details[1],
                "first_name": user_details[2],
                "last_name": user_details[3],
                "email": user_details[4],
                "profile_pic": user_details[5],
            }

            print("Data inserted successfully!")

        except Exception as e:
            print("Error inserting data:", e)
            connection.rollback()

        finally:
            cursor.close()
            close_db_connection(connection)

    return build_response(HTTPStatus.OK, data)


def build_response(status_code, body):
    return {
        "statusCode": status_code,
        "body": json.dumps(body),
        "headers": {"Content-Type": "application/json"},
    }
