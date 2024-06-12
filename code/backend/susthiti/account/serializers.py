from rest_framework import serializers
from .models import UserData

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = UserData
        fields = ['username', 'email', 'password', 'is_annoymousUser', 'is_doctor', 'is_mediatationTeacher']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = UserData.objects.create_user(**validated_data)
        return user
