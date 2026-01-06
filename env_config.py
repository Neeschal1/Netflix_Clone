import os
from dotenv import load_dotenv

load_dotenv()
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    
    EMAIL = os.getenv('EMAIL')
    PASSWORD = os.getenv('PASSWORD')