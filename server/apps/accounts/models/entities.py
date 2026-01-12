from django.db import models
from django.contrib.auth.models import User
from .choices import USER_DESIRED_CONTENT_CHOICES, USERS_DESIRED_PLAN_CHOICE

class Userchoice(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    Users_choice = models.CharField(max_length=15, choices=USER_DESIRED_CONTENT_CHOICES)
    def __str__(self):
        return self.User.username
    
class Profile(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE)
    Name = models.CharField(max_length=30)
    Avatar = models.URLField()
    Is_kid = models.BooleanField(default=0)
    Created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        full_name = f'{self.User.first_name} {self.User.last_name}'
        email = f'{self.User.email}'
        return f'{full_name} | {email}'
    
class Plan(models.Model):
    Users_name = models.ForeignKey(User, on_delete=models.CASCADE)
    Subscription_type = models.CharField(max_length=20, choices=USERS_DESIRED_PLAN_CHOICE)
    Price= models.PositiveIntegerField(default=0)
    Time = models.DateTimeField(auto_now_add=True)
    Paid = models.BooleanField(default=False)
    def __str__(self):
        return self.Users_name.username