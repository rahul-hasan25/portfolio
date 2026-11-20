from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def health_check(request):
    return Response({
        "status": "online",
        "service": "Portfolio Backend API",
        "stack": "Django + PostgreSQL",
        "phase": "Week 4: Empty but Live",
        "message": "Backend API is up and running!"
    })
