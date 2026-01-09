from django.core.cache import cache
from rest_framework.exceptions import ValidationError
from django.contrib.auth.models import User
from rest_framework.response import Response

def otpverification(serializer):
    OTP = serializer.validated_data['otp']
    Email = serializer.validated_data['email']
    o_t_p = cache.get(f'userotp for {Email}')
    if not o_t_p:
        raise ValidationError("OTP did not found, or may have been expired.Please request a new one!")
    if not OTP == o_t_p:
        raise ValidationError("OTP does not match. Try again!")
    try:
        user = User.objects.get(email = Email)
    except User.DoesNotExist:
        raise ValidationError("User does not found. So sorry :(")
    user.is_active = True
    user.save()
    return Response(f"{user.first_name}'s verfication status: {user.is_active}")