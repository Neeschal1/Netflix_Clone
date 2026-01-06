from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from ..models.entities import OTPmodel


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']
        extra_kwargs = {
            'first_name' : {'required' : True},
            'last_name' : {'required' : True},
            'username' : {'required' : True},
            'email' : {'required' : True},
            'password' : {'required' : True, 'write_only' : True},
        }
    
    
class UserOTPSerializers(serializers.ModelSerializer):
    class Meta:
        model = OTPmodel
        fields = '__all__'
        extra_kwargs = {
            'Username' : {'required' : True},
            'Userotp' : {'required' : True},
        }
        