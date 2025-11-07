from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CurrentUserView, LoginView, MatchaExperienceViewSet, RegisterView

router = DefaultRouter()
router.register(r'', MatchaExperienceViewSet, basename='experience')

urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='auth-register'),
    path('auth/login/', LoginView.as_view(), name='auth-login'),
    path('auth/user/', CurrentUserView.as_view(), name='auth-user'),
    path('experiences/', include(router.urls)),
]
