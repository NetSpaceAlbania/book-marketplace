from django.db import models

# Create your models here.
class Book(models.Model):
  titulli = models.CharField(max_length=100)
  cmimi = models.SmallIntegerField()
  foto = models.ImageField()
  data = models.DateTimeField(auto_now_add=True)

  def __str__(self):
      return self.titulli