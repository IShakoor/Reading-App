from rest_framework.permissions import AllowAny
from rest_framework import generics
from .serializers import RegisterSerializer

# view for registrations
class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
