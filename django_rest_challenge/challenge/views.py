from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

# TODO: Implement views for the User and Group Models, with authentication required + their respective serializers (serializers.py)

class UserViewSet(viewsets.ModelViewSet):
    pass

class GroupViewSet(viewsets.ModelViewSet):
    pass