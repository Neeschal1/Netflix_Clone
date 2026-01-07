from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


def home(request):
    return HttpResponse(
        "A full-featured Netflix clone built with modern web technologies, replicating the look, feel, and functionality of the popular streaming platform. This project demonstrates frontend, backend, and AI integration skills and is suitable for showcasing in portfolios or resumes."
    )


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", home, name="home"),
    path("accounts/", include("server.apps.accounts.api.urls")),
    path("contents/", include("server.apps.contents.api.urls")),
    path("token/access/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
