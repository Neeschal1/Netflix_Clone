from django.shortcuts import render
from .serializers import ContentsSerializers
from ..models.entities import Contents
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny

class ContentsSerializersView(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    queryset = Contents.objects.all()
    serializer_class = ContentsSerializers