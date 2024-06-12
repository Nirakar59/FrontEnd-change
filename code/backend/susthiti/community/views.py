from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Post
from .serializers import PostSerializer
from rest_framework.response import Response

class PostListAPIView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # permission_classes = [IsAuthenticated]
    

class PostListCreateAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
        

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Post
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied

class PostRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]  # Ensure only authenticated owners or admins can update or delete
    
    def get_object(self):
        # Retrieve the Post instance based on the provided pk
        return super().get_object()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        
        # Check if the post belongs to the authenticated user
        if instance.author != self.request.user:
            raise PermissionDenied("You do not have permission to update this post.")
        
        request.data['author'] = self.request.user.id
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        
        # Check if the post belongs to the authenticated user
        if instance.author != self.request.user:
            raise PermissionDenied("You do not have permission to delete this post.")
        
        return super().destroy(request, *args, **kwargs)
