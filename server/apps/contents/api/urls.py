from django.urls import path
from django.http import HttpResponse
from . import views

def home(request):
    return HttpResponse("Hey contents")

urlpatterns = [
    path('', home, name='home'),
    path('homecontents/', views.ContentsSerializersView.as_view(), name='ContentsSerializersView')
]