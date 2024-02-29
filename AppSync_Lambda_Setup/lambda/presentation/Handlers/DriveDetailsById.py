import psycopg2
from ..db_utils import get_db_connection, close_db_connection
from flask import request


def drive_details_by_id(drive_guid):
    connection = get_db_connection()
    data = []

    drive_id_query = """
        SELECT *
        FROM walk_in_drive 
        WHERE guid = %s
    """

    job_roles_query = """
        SELECT jr.job_title,jr.package,jr.job_description,job_requirements,jr.id
        FROM job_role jr
        JOIN drive_has_job_role dhjr ON jr.id = dhjr.job_role_id
        WHERE dhjr.drive_id = %s 
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

    print(request.cookies)
    try:
        cursor = connection.cursor()

        cursor.execute(drive_id_query, (drive_guid,))
        drive_data = cursor.fetchall()[0]
        # print(drive_data)

        cursor.execute(job_roles_query, (drive_data[0],))
        job_roles = cursor.fetchall()

        job_role_list = []
        for job_role_row in job_roles:
            job_role_dict = {
                "job_title": job_role_row[0],
                "package": job_role_row[1],
                "job_description": job_role_row[2],
                "job_requirements": job_role_row[3],
                "id": job_role_row[4],
            }
            job_role_list.append(job_role_dict)

        cursor.execute(timeSlots_query, (drive_data[0],))
        time_slots_tuples = cursor.fetchall()
        time_slots_list = [
            {"time_slot": slot, "id": id} for slot, id in time_slots_tuples
        ]

        data = {
            "id": drive_data[0],
            "guid": drive_data[1],
            "drive_title": drive_data[2],
            "start_date": str(drive_data[3]),
            "end_date": str(drive_data[4]),
            "location": drive_data[5],
            "jobRoles": job_role_list,
            "timeSlots": time_slots_list,
        }

        # print(data)

    finally:
        cursor.close()
        close_db_connection(connection)

    return data
