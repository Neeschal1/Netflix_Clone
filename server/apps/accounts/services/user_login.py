from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken


def login_an_account(serializer):
    Email = serializer.validated_data["email"]
    Password = serializer.validated_data["password"]
    try:
        user = User.objects.get(email=Email)
    except User.DoesNotExist:
        raise ValidationError(
            "User Doesnot exists. Please signup an accountfirst. Thank you!"
        )
    if not check_password(Password, user.password):
        raise ValidationError("Invalid Credentials!")
    
    if not user.is_active == True:
        raise ValidationError("You are not verified yet. So Sorry :(")
    # JWT tokens generations
    refresh = RefreshToken.for_user(user)
    access_token = str(refresh.access_token)
    refresh_token = str(refresh)
    response = Response(
        {
            "Message": "Logged in successfully!",
            "Tokens": {"access_token": access_token, "refresh_token": refresh_token},
        },
        status=status.HTTP_200_OK,
    )
    # For access token
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        secure=False,
        samesite="None",
        max_age=15 * 60,
    )
    # For refresh token
    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=False,
        samesite="None",
        max_age=7 * 24 * 60 * 60,
    )
    return response
