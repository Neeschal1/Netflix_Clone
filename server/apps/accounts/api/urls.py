from django.urls import path
from django.http import HttpResponse
from . import views

def home(request):
    return HttpResponse("Hey")

urlpatterns = [
    path('', home, name='home'),
    path('signup/', views.UserSignupSerializersView.as_view(), name='UserSignupSerializersView'),
    path('signup/otp/', views.UserOTPSerializersView.as_view(), name='UserOTPSerializersView'),
    path('signup/choices/', views.UserChoiceSerializerView.as_view(), name='UserChoiceSerializerView'),
    path('signup/choices/profile/', views.UsersProfileSerializerView.as_view(), name='UsersProfileSerializerView'),
    path('login/', views.UserLoginSerializersView.as_view(), name='UserLoginSerializersView'),
    path('signup/allusers/', views.AllUserSerializerView.as_view(), name='AllUserSerializerView'),
]