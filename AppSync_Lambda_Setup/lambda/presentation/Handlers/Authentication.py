import json
from http import HTTPStatus
import jwt
from datetime import datetime, timedelta
from ..db_utils import get_db_connection, close_db_connection

JWT_SECRET_KEY = "secret_key"


def authentication(event_arguments):
    data = []
    token = event_arguments["token"]

    jwt_token = jwt.decode(token, JWT_SECRET_KEY, algorithms=["HS256"])

    data = {
        "id": jwt_token["id"],
        "guid": jwt_token["guid"],
        "first_name": jwt_token["first_name"],
        "last_name": jwt_token["last_name"],
        "email": jwt_token["email"],
        "profile_pic": jwt_token["profile_pic"],
    }

    return data
