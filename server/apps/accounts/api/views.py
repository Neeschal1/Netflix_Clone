from django.contrib.auth.models import User
from rest_framework import generics, permissions
from .serializers import UserSerializers, UserOTPSerializers, UserLoginSerializers
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password, check_password
from ..services.otp import getotp
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from ..models.entities import OTPmodel
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
        )
        # Serializing the user details
        responseserializers = UserSerializers(user)
        o_t_p = getotp(Firstname, Email)
        OTPmodel.objects.create(
            Username = user,
            Userotp = o_t_p
        )
        return Response(
            {"message": "User created successfully", "data": responseserializers.data},
            status=status.HTTP_201_CREATED,
        )


class UserOTPSerializersView(APIView):
    def post(self, request):
        serializer = UserOTPSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)

        Name = serializer.validated_data["Username"]
        Otp = serializer.validated_data["Userotp"]

        try:
            user = User.objects.get(username=Name)
            if not user:
                raise ValidationError("Invalid User!")
        except User.DoesNotExist:
            return Response("User does not exists!", status=status.HTTP_400_BAD_REQUEST)

        try:
            userotp = OTPmodel.objects.filter(Username = user, Userotp = Otp).first()
        except OTPmodel.DoesNotExist:
            raise ValidationError("Invalid OTP Entered!")
        
        user.is_active = True
        user.save()
        
        otpmodel = UserOTPSerializers(userotp)
        
        return otpmodel


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
        return Response("Logged in successfully!", status=status.HTTP_200_OK)
