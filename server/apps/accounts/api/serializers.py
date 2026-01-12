from rest_framework import serializers
from django.contrib.auth.models import User
from ..models.entities import Userchoice, Profile, Plan
from django.contrib.auth.hashers import make_password

# For Creating a user
class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'is_active']
        extra_kwargs = {
            'id' : {'read_only' : True},
            'first_name' : {'required' : True},
            'last_name' : {'required' : True},
            'username' : {'required' : True},
            'email' : {'required' : True},
            'password' : {'required' : True, 'write_only' : True},
            'is_active' : {'read_only' : True},
        }


# For Admins only (Seeing all user's info)
class AllUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'username', 'email', 'password', 'is_active']
        extra_kwargs = {
            'id' : {'read_only' : True},
            'first_name' : {'read_only' : True},
            'last_name' : {'read_only' : True},
            'username' : {'read_only' : True},
            'email' : {'read_only' : True},
            'password' : {'read_only' : True},
            'is_active' : {'read_only' : True},
        }   

# For OTP Verification
class UserOTPSerializers(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.IntegerField()
    
# For Creating a plan
class UsersPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'
        extra_kwargs = {
            'Users_name' : {'required' : True},
            'Subscription_type' : {'required' : True},
            'Time' : {'read_only' : True},
            'Paid': { 'read_only' : True }
        }

# For login credentials
class UserLoginSerializers(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

# For creating a content choice
class UserChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userchoice
        fields = '__all__'
        extra_kwargs = {
            'User' : {'write_only' : True},
            'Users_choice' : {'required' : True},
        }

# For creating a Profile of Viewer       
class UsersProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        extra_kwargs = {
            'User' : {'required' : True},
            'Name' : {'required' : True},
            'Avatar' : {'required' : True},
            'Is_kid' : {'required' : True},
            'Created_at' : {'read_only' : True},
        }
  