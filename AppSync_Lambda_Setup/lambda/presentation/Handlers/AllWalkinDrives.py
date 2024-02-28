import psycopg2
from ..db_utils import get_db_connection, close_db_connection


def all_walk_in_drives():
    connection = get_db_connection()
    data = []

    try:
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM "walk_in_drive" ')
        results = cursor.fetchall()

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

        for row in results:
            cursor.execute(jobRoles_query, (row[0],))
            job_roles_tuples = cursor.fetchall()

            job_roles = [{"job_title": role[0]} for role in job_roles_tuples]

            drive_data = {
                "id": row[0],
                "guid": row[1],
                "drive_title": row[2],
                "start_date": str(row[3]),
                "end_date": str(row[4]),
                "location": row[5],
                "jobRoles": job_roles,
            }
            data.append(drive_data)

    finally:
        cursor.close()
        close_db_connection(connection)

    return data
