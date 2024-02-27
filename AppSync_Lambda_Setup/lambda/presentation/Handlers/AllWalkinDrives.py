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
                jr.job_title, jr.id
            FROM
                job_role jr
            JOIN
                drive_has_job_role dhjr ON dhjr.job_role_id = jr.id
            WHERE
                dhjr.drive_id = %s
        """

        timeSlots_query = """
            SELECT
                ts.slot_timings, ts.id
            FROM
                time_slot ts
            JOIN
                drive_has_time_slot dhts ON dhts.time_slot_id = ts.id   
            WHERE
                dhts.drive_id = %s
        """

        for row in results:
            cursor.execute(jobRoles_query, (row[0],))
            job_roles_tuples = cursor.fetchall()
            job_roles = [
                {"job_title": title, "id": job_id} for title, job_id in job_roles_tuples
            ]

            cursor.execute(timeSlots_query, (row[0],))
            time_slots_tuples = cursor.fetchall()
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

    finally:
        cursor.close()
        close_db_connection(connection)

    return data
