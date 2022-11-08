from rest_framework import serializers
from .models import Post


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["task", "completed", "timestamp", "updated", "user"]
