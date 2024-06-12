from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/register/', RegisterView.as_view(), name="sign_up"),
    path('auth/usersList/', UserListView.as_view(), name="get_users"),
    
    path('doctors/', DoctorProfileListCreate.as_view(), name='doctor-list-create'),
    path('doctors/<int:pk>/', DoctorProfileRetrieveUpdateDestroy.as_view(), name='doctor-detail'),
    
    path('anonymous-users/', AnnonymousUserListCreate.as_view(), name='anonymous-user-list-create'),
    path('anonymous-users/<int:pk>/', AnnonymousUserRetrieveUpdateDestroy.as_view(), name='anonymous-user-detail'),
    
    path('mediator-teachers/', MediatatorTeacherProfileListCreate.as_view(), name='mediator-teacher-list-create'),
    path('mediator-teachers/<int:pk>/', MediatatorTeacherProfileRetrieveUpdateDestroy.as_view(), name='mediator-teacher-detail'),
]