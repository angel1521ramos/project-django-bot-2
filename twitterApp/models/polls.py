from django.db import models

class Polls(models.Model):
    title = models.TextField()
    optionA = models.CharField(max_length=100, null=True)
    optionB = models.CharField(max_length=100, null=True)
    optionC = models.CharField(max_length=100, null=True)
    optionD = models.CharField(max_length=100, null=True)
    duration = models.IntegerField()
    counter = models.IntegerField()