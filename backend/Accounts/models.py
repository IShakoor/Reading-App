import hashlib
from django.contrib.auth.models import AbstractUser
from django.db import models
from encrypted_model_fields.fields import EncryptedTextField

# hashing emails
def hash_email(email):
    return hashlib.sha256(email.encode()).hexdigest()

# custom user class
class CustomUser(AbstractUser):
    email = EncryptedTextField(("Email Address"), unique=True) # encrypted
    email_hash = models.CharField(max_length=64, unique=True)
    favorite_genres = models.ManyToManyField('Books.Genre', blank=True)
    favorite_authors = models.ManyToManyField('Books.Author', blank=True)
    preferred_language = models.CharField(max_length=30, blank=True, null=True)
    reading_speed_wpm = models.IntegerField(default=200)

    def __str__(self):
        return self.username
    
    # save with hashed email
    def save(self, *args, **kwargs):
        if self.email:
            self.email_hash = hash_email(self.email.lower())
        super().save(*args, **kwargs)