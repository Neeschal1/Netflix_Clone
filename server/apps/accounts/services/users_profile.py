from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
from ..models.entities import Profile
from rest_framework.response import Response

def users_profile(serializer):
    Username = serializer.validated_data['User']
    User_Avatar = serializer.validated_data['Avatar']
    Users_Membership = serializer.validated_data['Premium_Member']
    try:
        user = User.objects.get(username = Username)
    except User.DoesNotExist:
        raise ValidationError("User not found. Please try again later!")
    Profile.objects.create(
            User = Username,
            Avatar = User_Avatar,
            Premium_Member = Users_Membership
    )
    return Response(f"Successfully created a record: {user.first_name}'s has Membership: {Users_Membership}")