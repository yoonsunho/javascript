# accounts/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    age = models.PositiveIntegerField(blank=True, null=True)