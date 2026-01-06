from .base import *
from pathlib import Path
from env_config import Config
BASE_DIR = Path(__file__).resolve().parent.parent.parent

DEBUG = True
SECRET_KEY = Config.SECRET_KEY
ALLOWED_HOSTS = []

WSGI_APPLICATION = 'server.config.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}