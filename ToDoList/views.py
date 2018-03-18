from rest_framework.views import APIView
from rest_framework.response import Response
from ToDoList.models import ToDoElements
from ToDoList.serializers import ToDoSerializer


class ToDoView(APIView):

    def get(self, request):
        todos = ToDoElements.objects.all()
        serializer = ToDoSerializer(todos, many=True)
        return Response(serializer.data)
