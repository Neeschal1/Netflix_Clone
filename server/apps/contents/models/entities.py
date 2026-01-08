from django.db import models
from .choices import CONTENT_CHOICES, RATING_CHOICES, GENRE_CHOICES

class Contents(models.Model):
    Title = models.CharField(max_length=100)
    Genre = models.CharField(max_length=30, choices=GENRE_CHOICES)
    Released_date = models.DateField()
    Content_category = models.CharField(choices=CONTENT_CHOICES)
    Content_description = models.TextField()
    Duration_in_minutes = models.PositiveIntegerField()
    Ratings = models.IntegerField(default=1)
    Starcasts = models.TextField()
    Director = models.CharField(max_length=50)
    Producer = models.CharField(max_length=50)
    Audiences = models.CharField(choices=RATING_CHOICES)
    Thumbnail = models.URLField()
    Video = models.URLField()
    Trailer = models.URLField()
    
    def __str__(self):
        return self.Title