from django.contrib.auth.models import User
from rest_framework.exceptions import ValidationError
from ..models.entities import Userchoice
from rest_framework.response import Response

def users_content_choice(serializer):
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