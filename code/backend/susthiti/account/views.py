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
from rest_framework.generics import RetrieveAPIView

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

class UserView(RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Retrieve the authenticated user object
        return self.request.user

    def get_serializer_context(self):
        context = super().get_serializer_context()
        user = self.get_object()

        if user.is_doctor:
            doctor_profile = DoctorProfile.objects.filter(user=user).first()
            if doctor_profile:
                context['doctor_profile'] = doctor_profile

        elif user.is_annoymousUser:
            annonymous_user = AnnonymousUser.objects.filter(user=user).first()
            if annonymous_user:
                context['annonymous_user'] = annonymous_user

        elif user.is_mediatationTeacher:
            mediatator_teacher_profile = MediatatorTeacherProfile.objects.filter(user=user).first()
            if mediatator_teacher_profile:
                context['mediatator_teacher_profile'] = mediatator_teacher_profile

        return context

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
    permission_classes = [IsAuthenticated]
    
class AnnonymousUserRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = AnnonymousUser.objects.all()
    serializer_class = AnnonymousUserSerializer
    permission_classes = [IsOwnerOrAdmin, IsAuthenticated]
    
class MediatatorTeacherProfileRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = MediatatorTeacherProfile.objects.all()
    serializer_class = MediatatorTeacherProfileSerializer
    permission_classes = [IsOwnerOrAdmin, IsAuthenticated]
    
    
class UserDeleteAPIView(APIView):
    permission_classes = [IsAuthenticated, IsOwnerOrAdmin]

    def delete(self, request, *args, **kwargs):
        user = request.user
        user.delete()  # This will delete the user and cascade to related models

        return Response({"message": "Account deleted successfully."})
    
    
    
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import FreeTimeSlot
from .serializers import FreeTimeSlotSerializer

class FreeTimeSlotListCreateAPIView(generics.ListCreateAPIView):
    queryset = FreeTimeSlot.objects.all()
    serializer_class = FreeTimeSlotSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filter free time slots for the currently authenticated doctor or teacher
        return self.queryset.filter(doctor_or_teacher=self.request.user)

    def perform_create(self, serializer):
        # Associate the currently authenticated user (doctor or teacher) with the free time slot
        serializer.save(doctor_or_teacher=self.request.user)

class FreeTimeSlotRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FreeTimeSlot.objects.all()
    serializer_class = FreeTimeSlotSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filter free time slots for the currently authenticated doctor or teacher
        return self.queryset.filter(doctor_or_teacher=self.request.user)
    
    
