from django.db import models

class Libri(models.Model):
    titulli=models.CharField(max_length=100)
    data=models.DateTimeField(auto_now_add=True)
    cmimi=models.SmallIntegerField()
    foto= models.ImageField()

    def __str__(self):
        return self.titulli