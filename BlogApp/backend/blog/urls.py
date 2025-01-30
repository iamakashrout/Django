from django.urls import path
from . import views
from .views import PostListCreateView, PostDetailView

urlpatterns = [
    path('', views.home, name='home'),
    path('posts/', PostListCreateView.as_view(), name='post-list-create'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post-detail'),
]