from django.contrib.auth.models import User
from rest_framework import serializers

from .models import MatchaExperience


class UserPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data.get('email', '')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def validate_username(self, value):
        if User.objects.filter(username__iexact=value).exists():
            raise serializers.ValidationError('Username is already taken.')
        return value


class MatchaExperienceSerializer(serializers.ModelSerializer):
    user = UserPublicSerializer(read_only=True)
    spot_name = serializers.CharField(source='spot.name', read_only=True)

    class Meta:
        model = MatchaExperience
        fields = (
            'id', 'user', 'spot', 'spot_name', 'title', 'content', 'rating',
            'created_at', 'updated_at'
        )
        read_only_fields = ('id', 'user', 'spot_name', 'created_at', 'updated_at')

    def validate_rating(self, value):
        if value is not None and (value < 1 or value > 5):
            raise serializers.ValidationError('Rating must be between 1 and 5.')
        return value
