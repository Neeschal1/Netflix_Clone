from django.contrib.auth.models import User
from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework import generics
from ..models.entities import *
from ..services.user_signup import *
from ..services.verify_otp import otpverification
from ..services.user_login import login_an_account
from ..services.users_choice import users_content_choice
from ..services.users_profile import users_profile
from ..services.payment import create_plan_payment
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAdminUser
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework import status

# Views for Creating an account of a user
class UserSignupSerializersView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializers = UserSerializers(data=request.data)
        serializers.is_valid(raise_exception=True)
        return signup_user(serializers)
        
# Views for OTP Verification
class UserOTPSerializersView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserOTPSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        return otpverification(serializer)
    
# View for creating a subscription plan
@method_decorator(csrf_exempt, name="dispatch")
class UsersPlanSerializerView(APIView):
    authentication_classes = []
    permission_classes = []
    def post(self, request):
        plantype = request.data.get("item")
        return create_plan_payment(plantype)
    
# Views for Logging in a user
class UserLoginSerializersView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserLoginSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        return login_an_account(serializer)
    
# Users desired choice of contents  
class UserChoiceSerializerView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserChoiceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return users_content_choice(serializer)
        
# Users profile setup
class UsersProfileSerializerView(APIView):
    permission_classes=[AllowAny]
    def post(self, request):
        serializer = UsersProfileSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        return users_profile(serializer)
        
# Views for Admins only(Seeing all users)
class AllUserSerializerView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = AllUserSerializer
    
    