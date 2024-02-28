from psycopg2.extras import execute_values
from ..db_utils import get_db_connection, close_db_connection


def create_user(event_arguments):

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
        applied_test_role = professionalQualifications.get("applied_test_role", None)

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
            notice_period_duration = experienced_qualification["notice_period_duration"]
            expertiseTechnologies = experienced_qualification["expertiseTechnologies"]

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
            expertiseTechnologies = experienced_qualification["expertiseTechnologies"]
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
        execute_values(cursor, sql_familiar_technology, familiarTechnologies_records)
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

        return data

    except Exception as e:
        print("Error inserting data:", e)
        connection.rollback()

    finally:
        cursor.close()
        close_db_connection(connection)
