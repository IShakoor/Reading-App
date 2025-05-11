from django.db import models

# genre for books
class Genre(models.Model):
    name = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.name

# book author
class Author(models.Model):
    name = models.CharField(max_length=128)
    biography = models.TextField(blank=True)
    # could add DOB, image later...

    def __str__(self):
        return self.name

# Book class
class Book(models.Model):

    SOURCE_CHOICES = [
        ('google_books', 'Google Books'),
        ('openlibrary', 'OpenLibrary'),
        ('standard_ebooks', 'Standard Ebooks'),
        ('manual', 'Manual Upload'),
    ]

    title = models.CharField(max_length=256)
    authors = models.ManyToManyField(Author)
    genres = models.ManyToManyField(Genre)
    description = models.TextField(blank=True)
    language = models.CharField(max_length=32, default='English')
    cover_image = models.ImageField(upload_to='book_covers/', blank=True, null=True)
    file = models.FileField(upload_to='books/', blank=True, null=True)
    external_download_url = models.URLField(blank=True, null=True)
    source = models.CharField(max_length=32, choices=SOURCE_CHOICES, default='manual')

    def __str__(self):
        return self.title