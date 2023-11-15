from django.db import models

class Tweets(models.Model):
    message = models.TextField()
    counter = models.IntegerField()