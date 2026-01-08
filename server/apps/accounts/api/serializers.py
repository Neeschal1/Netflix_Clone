from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

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


class UserLoginSerializers(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()