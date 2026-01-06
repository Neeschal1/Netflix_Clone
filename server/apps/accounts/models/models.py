from django.db import models
from django.contrib.auth.models import User

class OTP(models.Model):
    Username = models.ForeignKey(User, on_delete=models.CASCADE)
    Userotp = models.IntegerField(max_length=6)
    
    def __str__(self):
        return self.Username