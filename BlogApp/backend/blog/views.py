from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

# Create your views here.

def home(request):
    return HttpResponse("Hello, Django!")

class PostListCreateView(generics.ListCreateAPIView):  # GET (list) & POST (create)
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

class PostDetailView(generics.RetrieveUpdateDestroyAPIView):  # GET, PUT, DELETE
    queryset = Post.objects.all()
    serializer_class = PostSerializer