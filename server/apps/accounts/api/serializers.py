from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

# For Creating a user
class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password', 'is_active']
        extra_kwargs = {
            'first_name' : {'required' : True},
            'last_name' : {'required' : True},
            'username' : {'required' : True},
            'email' : {'required' : True},
            'password' : {'required' : True, 'write_only' : True},
            'is_active' : {'read_only' : True},
        }


# For Admins only(Seeing all user's info)
class AllUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password', 'is_active']
        extra_kwargs = {
            'first_name' : {'read_only' : True},
            'last_name' : {'read_only' : True},
            'username' : {'read_only' : True},
            'email' : {'read_only' : True},
            'password' : {'read_only' : True},
            'is_active' : {'read_only' : True},
        }   

class UserOTPSerializers(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.IntegerField()


class UserLoginSerializers(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()