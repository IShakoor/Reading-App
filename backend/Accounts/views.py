from django.shortcuts import render
from rest_framework import generics
from .serializers import RegisterSerializer

# view for registrations
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
