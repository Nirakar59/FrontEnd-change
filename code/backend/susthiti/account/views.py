from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer
from .models import UserData
from .permissions import *


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            response_data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserListView(ListAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class DoctorProfileListCreate(generics.ListCreateAPIView):
    queryset = DoctorProfile.objects.all()
    serializer_class = DoctorProfileSerializer
    permission_classes = [IsAuthenticated]
    
class AnnonymousUserListCreate(generics.ListCreateAPIView):
    queryset = AnnonymousUser.objects.all()
    serializer_class = AnnonymousUserSerializer
    permission_classes = [IsAuthenticated]

class MediatatorTeacherProfileListCreate(generics.ListCreateAPIView):
    queryset = MediatatorTeacherProfile.objects.all()
    serializer_class = MediatatorTeacherProfileSerializer
    permission_classes = [IsAuthenticated]
    
     
class DoctorProfileRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = DoctorProfile.objects.all()
    serializer_class = DoctorProfileSerializer
    permission_classes = [IsOwnerOrAdmin, IsAuthenticated]
    
class AnnonymousUserRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = AnnonymousUser.objects.all()
    serializer_class = AnnonymousUserSerializer
    permission_classes = [IsOwnerOrAdmin, IsAuthenticated]
    
class MediatatorTeacherProfileRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = MediatatorTeacherProfile.objects.all()
    serializer_class = MediatatorTeacherProfileSerializer
    permission_classes = [IsOwnerOrAdmin, IsAuthenticated]