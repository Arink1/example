from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import get_user_model  # Import get_user_model

def user_count(request):
    User = get_user_model()  # Use get_user_model() to fetch the active user model
    count = User.objects.count()
    return JsonResponse({"user_count": count})
