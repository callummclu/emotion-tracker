from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Post(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    timestamp = models.DateTimeField(
        auto_now_add=True, auto_now=False, blank=True)
    emotion_value = models.CharField(max_length=180)

    def __str__(self):
        return self.emotion_value
