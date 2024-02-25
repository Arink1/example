from django.urls import path
from .views import user_count

urlpatterns = [
    path('user-count/', user_count, name='user-count'),
]
