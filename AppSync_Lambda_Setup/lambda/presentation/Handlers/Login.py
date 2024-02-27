import json
from http import HTTPStatus
from ..db_utils import get_db_connection, close_db_connection


def login(event_arguments):

    data = []
    email = event_arguments["email"]
    password = event_arguments["password"]

    login_query = """
        SELECT * 
        FROM "user"
        WHERE email = %s
    """

    connection = get_db_connection()

    try:
        cursor = connection.cursor()

        cursor.execute(login_query, (email,))
        result_data = cursor.fetchone()

        if result_data and result_data[5] == password:
            data = {
                "id": result_data[0],
                "guid": result_data[1],
                "first_name": result_data[2],
                "last_name": result_data[3],
                "email": result_data[4],
                "profile_pic": result_data[9],
                "resume": result_data[7],
            }

            return data
            # return build_response(HTTPStatus.OK, user_details)
        else:
            print("wrong password")

    finally:
        cursor.close()
        close_db_connection(connection)
