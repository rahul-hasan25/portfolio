from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def root_status(request):
    return JsonResponse({
        "project": "Portfolio API",
        "status": "healthy",
        "endpoints": {
            "health": "/api/health/",
            "admin": "/admin/"
        }
    })

urlpatterns = [
    path('', root_status, name='root-status'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
