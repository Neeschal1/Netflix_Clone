from django.contrib.auth.models import User
from rest_framework import generics, permissions
from .serializers import UserSerializers
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework import status
    
class UserSignupSerializersView(APIView):
    def post(self, request):
        serializers = UserSerializers(data = request.data)
        serializers.is_valid(raise_exception=True)
        
        Firstname = serializers.validated_data['first_name']
        Lastname = serializers.validated_data['last_name']
        Username = serializers.validated_data['username']
        Email = serializers.validated_data['email']
        Password = serializers.validated_data['password']
        
        finduser = User.objects.filter(username = Username).exists()
        
        if finduser:
            return Response({"error":"User already exists with the same username!"}, status=status.HTTP_400_BAD_REQUEST)
        
        HashedPassword = make_password(Password)
        
        user = User.objects.create(
            first_name = Firstname,
            last_name = Lastname,
            username = Username,
            email = Email,
            password = HashedPassword
        )
        
        return Response({"message": "User created successfully", "data" : user}, status=status.HTTP_201_CREATED)
