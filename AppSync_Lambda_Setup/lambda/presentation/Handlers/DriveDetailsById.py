import psycopg2
from ..db_utils import get_db_connection, close_db_connection


def drive_details_by_id(drive_guid):
    connection = get_db_connection()
    data = []

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

        cursor.execute(job_roles_query, (drive_id,))
        job_roles = cursor.fetchall()

        for job_role_row in job_roles:
            job_role_dict = {
                "job_title": job_role_row[0],
                "package": job_role_row[1],
                "job_description": job_role_row[2],
                "job_requirements": job_role_row[3],
            }
            data.append(job_role_dict)

    finally:
        cursor.close()
        close_db_connection(connection)

    return data
