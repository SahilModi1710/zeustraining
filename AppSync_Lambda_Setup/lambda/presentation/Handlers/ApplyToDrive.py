from psycopg2.extras import execute_values
from ..db_utils import get_db_connection, close_db_connection


def apply_to_drive(event_arguments):
    connection = get_db_connection()
    print(event_arguments)
    try:
        cursor = connection.cursor()
        user_id = event_arguments["user_id"]
        updated_resume = event_arguments["updated_resume"]
        time_slot = event_arguments["time_slot"]
        walkin_drive_id = event_arguments["walkin_drive_id"]
        jobRoles = event_arguments["jobRoles"]

        apply_drive_query = """
            INSERT INTO "applied_drive" (updated_resume, time_slot_id, walk_in_drive_id, user_id)
            VALUES (%s, %s, %s, %s)
            RETURNING id
        """

        job_role_query = """
            INSERT INTO "applied_drive_job_role" (applied_drive_id, job_role_id)
            VALUES %s
        """

        cursor.execute(
            apply_drive_query, (updated_resume, time_slot, walkin_drive_id, user_id)
        )
        applied_drive_id = cursor.fetchone()[0]

        job_role_values = [(applied_drive_id, job_role_id) for job_role_id in jobRoles]

        execute_values(cursor, job_role_query, job_role_values)

        connection.commit()

        return {
            "statusCode": 200,
            "body": "Applied drive record inserted successfully!",
        }

    except Exception as e:
        connection.rollback()
        print(f"Error submitting application: {str(e)}")
        return {"error": "Failed to submit application."}

    finally:
        cursor.close()
        close_db_connection(connection)
