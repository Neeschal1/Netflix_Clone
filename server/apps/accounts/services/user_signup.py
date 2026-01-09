from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from ..api.serializers import *
from .otp import getotp
from django.core.cache import cache
from django.contrib.auth.hashers import make_password

def signup_user(serializers):
    Firstname = serializers.validated_data["first_name"]
    Lastname = serializers.validated_data["last_name"]
    Username = serializers.validated_data["username"]
    Email = serializers.validated_data["email"]
    Password = serializers.validated_data["password"]
    if User.objects.filter(username=Username).exists():
        return Response(
            {"error": "User already exists with the same username!"},
            status=status.HTTP_400_BAD_REQUEST,
        )
    HashedPassword = make_password(Password)
    user = User.objects.create(
            first_name=Firstname,
            last_name=Lastname,
            username=Username,
            email=Email,
            password=HashedPassword,
            is_active = False
    )
    responseserializers = UserSerializers(user)
    o_t_p = getotp(Firstname, Email)
    cache.set(f'userotp for {Email}', o_t_p, timeout=300)
    return Response(
            {"message": "User created successfully", "data": responseserializers.data},
            status=status.HTTP_201_CREATED,
        )