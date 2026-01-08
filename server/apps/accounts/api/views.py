from django.contrib.auth.models import User
from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework import generics
from django.core.cache import cache
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password, check_password
from ..services.otp import getotp
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework import status


# Views for Creating an account of a user
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
        o_t_p = getotp(Firstname, Email)
        cache.set(f'userotp for {Email}', o_t_p, timeout=300)
        return Response(
            {"message": "User created successfully", "data": responseserializers.data},
            status=status.HTTP_201_CREATED,
        )
        
        
        
# Views for OTP Verification
class UserOTPSerializersView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserOTPSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        OTP = serializer.validated_data['otp']
        Email = serializer.validated_data['email']
        o_t_p = cache.get(f'userotp for {Email}')
        if not o_t_p:
            raise ValidationError("OTP did not found, or may have been expired. Please request a new one!")
        if not OTP == o_t_p:
            raise ValidationError("OTP does not match. Try again!")
        try:
            user = User.objects.get(email = Email)
        except User.DoesNotExist:
            raise ValidationError("User does not found. So sorry :(")
        user.is_active = True
        user.save()
        return Response(f"{user.first_name}'s verfication status: {user.is_active}")


# Views for Logging in a user
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



# Views for Admins only(Seeing all users)
class AllUserSerializerView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = AllUserSerializer
    
    
class UserChoiceSerializerView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserChoiceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        Username = serializer.validated_data['User']
        UsersChoice = serializer.validated_data['Users_choice']
        try:
            user = User.objects.get(username = Username)
        except User.DoesNotExist:
            raise ValidationError("User not found. Try again!!")
        Userchoice.objects.create(
            User = Username,
            Users_choice = UsersChoice)
        return Response(f"{user.first_name} choosed {UsersChoice}. From now onwards, you'll get to see your default contents based on your choice :)")
