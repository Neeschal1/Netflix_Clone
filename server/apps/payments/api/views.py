from django.shortcuts import render
import strip
from env_config import Config
import stripe

strip.api_key = Config.STRIP_SECRET_KEY