from rest_framework import serializers
from ..models.entities import Contents

class ContentsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contents
        fields = ['Content_category', 'Title', 'Description', 'Audiences', 'Released_date', 'Duration_in_minutes', 'Thumbnain', 'Video', 'Trailer']
        extra_kwargs = {
            'Content_category' : {'required' : True},
            'Title' : {'required' : True},
            'Description' : {'required' : True},
            'Audiences' : {'required' : True},
            'Released_date' : {'required' : True},
            'Duration_in_minutes' : {'required' : True},
            'Thumbnain' : {'required' : True},
            'Video' : {'required' : True},
            'Trailer' : {'required' : True},
        }
        