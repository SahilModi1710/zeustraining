import json
from http import HTTPStatus
import psycopg2

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
    event = json.loads(event["body"])

    data = []
    print("hello")
    if type(event) == list:
        for each_event in event:
            data.append(handle_each_request(each_event))
    else:
        data = handle_each_request(event)

    return data


def handle_each_request(event):
    field_name = event["info"]["fieldName"]
    event_source = event["source"]
    event_arguments = event["arguments"]

    data = []

    jobRoles_query = """
          SELECT
                jr.job_title
            FROM
                job_role jr
            JOIN
                drive_has_job_role dhjr ON dhjr.job_role_id = jr.id
            WHERE
                dhjr.drive_id = %s
    """

    timeSlots_query = """
          SELECT
                ts.slot_timings
            FROM
                time_slot ts
            JOIN
                drive_has_time_slot dhts ON ts.id = dhts.time_slot_id 
            WHERE
                dhts.time_slot_id = %s
    """

    # PostgreSQL database operations
    if field_name == "getAllWalkInDrives":
        connection = get_db_connection()
        try:
            cursor = connection.cursor()

            cursor.execute('SELECT * FROM "walk_in_drive" ')
            results = cursor.fetchall()

            for row in results:
                cursor.execute(jobRoles_query, (row[0],))
                job_roles_tuples = cursor.fetchall()
                # print(job_roles_tuples)
                job_roles = [role[0] for role in job_roles_tuples]

                cursor.execute(timeSlots_query, (row[0],))
                time_slots_tuples = cursor.fetchall()
                # print(time_slots_tuples)
                time_slots = [slot[0] for slot in time_slots_tuples]

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

    elif field_name == "getDriveDetailsByID":

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

    elif field_name == "login":
        connection = get_db_connection()
        email = event_arguments["input"]["email"]
        password = event_arguments["input"]["password"]

        login_query = """
            SELECT * 
            FROM "user"
            where email = %s
        """

        cursor = connection.cursor()

        cursor.execute(login_query , (email,))
        result_data = cursor.fetchone()
       

        if result_data[5] == password: 
                
                data = {
                    "id": result_data[0],
                    "guid": result_data[1],
                    "first_name": result_data[2],
                    "last_name": result_data[3],
                    "email": result_data[4],
                    "profile_pic": result_data[9],
                    "resume": result_data[7]
                }
                
                # data.append(dict)
                # print(data)
        else:
            # print("Wrong Password")
            data = {"message": "Wrong Password" } 
            return build_response(HTTPStatus.UNAUTHORIZED, data)
        # print(temp)

    elif field_name == "applyToDrive":

        connection = get_db_connection()
        try:
            user_id = event_arguments["input"]["user_id"]
            updated_resume= event_arguments["input"]["updated_resume"]
            time_slot = event_arguments["input"]["time_slot"]
            walkin_drive_id= event_arguments["input"]["walkin_drive_id"]
            jobRoles= event_arguments["input"]["jobRoles"]

            apply_drive_query = """
                INSERT INTO "applied_drive" (updated_resume , time_slot_id, walk_in_drive_id , user_id)
                VALUES 
                (%s,%s,%s,%s)
            """

            cursor = connection.cursor()

            cursor.execute(apply_drive_query , (updated_resume,time_slot,walkin_drive_id,user_id))
            connection.commit()
            print("successfull")

        except Exception as e:
            connection.rollback()
            print(f"Error submitting application: {str(e)}")
            data = {"error": "Failed to submit application"}
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
