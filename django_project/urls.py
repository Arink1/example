from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from accounts.views import user_count  # Adjust the import path as necessary

urlpatterns = [
    path("admin/", admin.site.urls),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/accounts/', include('accounts.urls')),  # Adjust 'accounts.urls' based on your app name
    path('api/user-count/', user_count, name='user-count'),
    path("", include("pages.urls")),
]

if settings.DEBUG:
    import debug_toolbar

    urlpatterns = [
        path("__debug__/", include(debug_toolbar.urls)),
    ] + urlpatterns
