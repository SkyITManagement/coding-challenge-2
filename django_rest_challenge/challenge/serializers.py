from django.contrib.auth.models import Group, User
from rest_framework import serializers

# TODO: Implement serializers for the User and Group models

# UserSerializer - Fields: url, username, email, groups
class UserSerializer(serializers.HyperlinkedModelSerializer):
    pass

# GroupsSerializer - Fields: url, name
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    pass

