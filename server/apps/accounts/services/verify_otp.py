from django.core.cache import cache
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework import status

def otpverification(serializer):
    OTP = serializer.validated_data['otp']
    Email = serializer.validated_data['email']
    o_t_p = cache.get(f'userotp for {Email}')
    if not o_t_p:
        raise ValidationError("OTP did not found, or may have been expired.Please request a new one!")
    if not OTP == o_t_p:
        raise ValidationError("OTP does not match. Try again!")
    return Response({"Message": "OTP verified successfully"}, status=status.HTTP_201_CREATED)