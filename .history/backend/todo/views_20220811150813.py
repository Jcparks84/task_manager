from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

class TodoVIew(viewsets.ModelViewSet):
    serializer_class = 

