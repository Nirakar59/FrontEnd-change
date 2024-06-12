from django.urls import path
from .views import *

urlpatterns = [
    path('api/posts/public/list/', PostListAPIView.as_view(), name='post-list-create'),
    path('api/posts/', PostListCreateAPIView.as_view(), name='post-list-create'),
    path('api/posts/<int:pk>/', PostRetrieveUpdateDestroyAPIView.as_view(), name='post-detail'),
]
