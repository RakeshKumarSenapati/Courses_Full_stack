from django.contrib import admin
from django.urls import path, include
from api.views import CourseViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'courses', CourseViewset)

urlpatterns = [
    path('', include(router.urls))
]