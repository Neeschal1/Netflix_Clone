from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
from ..models.entities import Profile
from rest_framework.response import Response

def users_profile(serializer):
    Username = serializer.validated_data['User']
    Name_of_User = serializer.validated_data['Name']
    User_Avatar = serializer.validated_data['Avatar']
    Kid = serializer.validated_data['Is_kid']
    try:
        user = User.objects.get(username = Username)
    except User.DoesNotExist:
        raise ValidationError("User not found. Please try again later!")
    Profile.objects.create(
            User = Username,
            Name = Name_of_User,
            Avatar = User_Avatar,
            Is_kid = Kid
    )
    return Response(f"Successfully created a record for {user.first_name}. ")
