from django.urls import path
from django.http import HttpResponse
from . import views

def home(request):
    return HttpResponse("Hey")

urlpatterns = [
    path('', home, name='home'),
    path('signup/', views.UserSignupSerializersView.as_view(), name='UserSignupSerializersView'),
    path('login/', views.UserLoginSerializersView.as_view(), name='UserLoginSerializersView')
]