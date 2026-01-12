from django.contrib import admin
from .models.entities import Userchoice, Profile, Plan

admin.site.register(Userchoice)
admin.site.register(Profile)
admin.site.register(Plan)