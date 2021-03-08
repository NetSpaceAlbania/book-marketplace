from django.db import models

# Create your models here.
class Book(models.Model):
  titulli = models.CharField(max_length=100)
  cmimi = models.SmallIntegerField()
  foto_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
  foto_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
  foto_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
  foto_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
  foto_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
  data = models.DateTimeField(auto_now_add=True)

  def __str__(self):
      return self.titulli