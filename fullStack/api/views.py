from django.shortcuts import render
from rest_framework import viewsets
from api.models import Courses
from api.serializers import CourseSerializer

# Create your views here.
class CourseViewset(viewsets.ModelViewSet):
    queryset = Courses.objects.all()
    serializer_class = CourseSerializer
