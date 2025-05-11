from django.contrib.auth.models import AbstractUser
from django.db import models

# custom user class
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    favorite_genres = models.ManyToManyField('Genre', blank=True)
    favorite_authors = models.ManyToManyField('Author', blank=True)
    preferred_language = models.CharField(max_length=30, blank=True, null=True)
    reading_speed_wpm = models.IntegerField(default=200)

    def __str__(self):
        return self.username

