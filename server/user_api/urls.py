from django.contrib import admin
from django.urls import path, include
from .views import (
    UserPostsApiView,
)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('post', UserPostsApiView.as_view())
]
