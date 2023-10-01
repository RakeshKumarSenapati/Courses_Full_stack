from django.db import models

# Create your models here.

#creating courses model:
class Courses(models.Model):
    name = models.CharField(max_length=25)
    description = models.TextField()
    faculty = models.CharField(max_length=40)
    date = models.DateTimeField(auto_now= True)
    img = models.ImageField(upload_to='img', default='./img/panda.jpg')

