import os
from dotenv import load_dotenv

load_dotenv()
class Config:
    SECRET_KEY = os.getenv('SECRET_KEY')
    
    EMAIL = os.getenv('EMAIL')
    PASSWORD = os.getenv('PASSWORD')
    
    STRIPE_PUBLISHABLE_KEY = os.getenv('STRIPE_PUBLISHABLE_KEY')
    STRIPE_SECRET_KEY = os.getenv('STRIPE_SECRET_KEY')
    
    MAILTRAP_API_KEY = os.getenv('MAILTRAP_API_KEY')