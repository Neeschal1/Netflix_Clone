from django.contrib.auth.models import User
from rest_framework import generics, permissions
from .serializers import UserSerializers, UserLoginSerializers
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password, check_password
from ..services.otp import getotp
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny
from rest_framework import status


class UserSignupSerializersView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializers = UserSerializers(data=request.data)
        serializers.is_valid(raise_exception=True)
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
        # Serializing the user details
        responseserializers = UserSerializers(user)
        return Response(
            {"message": "User created successfully", "data": responseserializers.data},
            status=status.HTTP_201_CREATED,
        )


class UserLoginSerializersView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserLoginSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        Email = serializer.validated_data['email']
        Password = serializer.validated_data['password']
        
        try:
            user = User.objects.get(email = Email)
        except User.DoesNotExist:
            raise ValidationError("User Doesnot exists. Please signup an account first. Thank you!")
        
        if not check_password(Password, user.password):
            raise ValidationError("Invalid Credentials!")
        
        # JWT tokens generations
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)
        
        response = Response({"Message":"Logged in successfully!", 'Tokens' : {'access_token' : access_token, 'refresh_token' : refresh_token}}, status=status.HTTP_200_OK)
        
        # For access token
        response.set_cookie(
            key='access_token',
            value=access_token,
            httponly=True,
            secure=False,
            samesite='None',
            max_age=15*60
        )
        
        # For refresh token
        response.set_cookie(
            key='refresh_token',
            value=refresh_token,
            httponly=True,
            secure=False,
            samesite='None',
            max_age=7*24*60*60
        )
        
        return response
