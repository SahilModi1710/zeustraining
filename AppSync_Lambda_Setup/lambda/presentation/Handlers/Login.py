import json
from http import HTTPStatus
import jwt
from datetime import datetime, timedelta
from ..db_utils import get_db_connection, close_db_connection

JWT_SECRET_KEY = "secret_key"
JWT_EXPIRATION_TIME_MINUTES = 60


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
            # Generate JWT token
            payload = {
                "id": result_data[0],
                "guid": result_data[1],
                "first_name": result_data[2],
                "last_name": result_data[3],
                "email": result_data[4],
                "profile_pic": result_data[9],
                "exp": datetime.utcnow()
                + timedelta(minutes=JWT_EXPIRATION_TIME_MINUTES),
            }
            jwt_token = jwt.encode(payload, JWT_SECRET_KEY, algorithm="HS256")

            print(jwt_token)
            data = {
                "id": result_data[0],
                "guid": result_data[1],
                "first_name": result_data[2],
                "last_name": result_data[3],
                "email": result_data[4],
                "profile_pic": result_data[9],
                "resume": result_data[7],
                "token": jwt_token,
            }

            return data
        else:
            print("wrong password")
    finally:
        cursor.close()
        close_db_connection(connection)
