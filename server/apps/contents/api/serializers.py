from rest_framework import serializers
from ..models.entities import Contents

class ContentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contents
        fields = '__all__'
        extra_kwargs = {
            'Title' : {'required' : True},
            'Genre' : {'required' : True},
            'Released_date' : {'required' : True},
            'Content_category' : {'required' : True},
            'Content_description' : {'required' : True},
            'Duration_in_minutes' : {'required' : True},
            'Ratings' : {'required' : True},
            'Starcasts' : {'required' : True},
            'Director' : {'required' : True},
            'Producer' : {'required' : True},
            'Audiences' : {'required' : True},
            'Thumbnail' : {'required' : True},
            'Video' : {'required' : True},
            'Trailer' : {'required' : True},
        }
        
        
    # Title = models.CharField(max_length=100)
    # Genre = models.CharField(max_length=30, choices=GENRE_CHOICES)
    # Released_date = models.DateField()
    # Content_category = models.CharField(choices=CONTENT_CHOICES)
    # Content_description = models.TextField()
    # Duration_in_minutes = models.PositiveIntegerField()
    # Ratings = models.IntegerField(default=1)
    # Starcasts = models.TextField()
    # Director = models.CharField(max_length=50)
    # Producer = models.CharField(max_length=50)
    # Audiences = models.CharField(choices=RATING_CHOICES)
    # Thumbnail = models.URLField()
    # Video = models.URLField()
    # Trailer = models.URLField()
    