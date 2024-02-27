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
