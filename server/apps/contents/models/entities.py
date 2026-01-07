from django.db import models
from .choices import CONTENT_CHOICES, RATING_CHOICES

class Contents(models.Model):
    Content_category = models.CharField(choices=CONTENT_CHOICES)
    Title = models.CharField(max_length=100)
    Description = models.TextField()
    Audiences = models.CharField(choices=RATING_CHOICES)
    Released_date = models.CharField(max_length=10)
    Duration_in_minutes = models.PositiveIntegerField()
    Thumbnain = models.URLField()
    Video = models.URLField()
    Trailer = models.URLField()
    
    def __str__(self):
        return self.Title