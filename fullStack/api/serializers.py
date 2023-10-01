from rest_framework import serializers
from api.models import Courses

class CourseSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Courses
        fields="__all__"
        