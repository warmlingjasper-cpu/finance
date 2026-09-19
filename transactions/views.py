from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import logout
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from django.contrib.auth.models import User
from django.http import JsonResponse

from .models import (
    Receita,
    Despesa,
    Investimento,
    Fundo,
    ReceitaPlanejada,
    DespesaPlanejada,
    InvestimentoPlanejado,
    FundoPlanejado,
)
from .serializers import (
    ReceitaSerializer,
    DespesaSerializer,
    InvestimentoSerializer,
    FundoSerializer,
    ReceitaPlanejadaSerializer,
    DespesaPlanejadaSerializer,
    InvestimentoPlanejadoSerializer,
    FundoPlanejadoSerializer,
)

def reset_admin_password(request):
    user = User.objects.get(username="Admin")
    user.set_password("COLOQUE_UMA_SENHA_NOVA_AQUI")
    user.is_staff = True
    user.is_superuser = True
    user.save()

    return JsonResponse({
        "message": "Senha do Admin atualizada."
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    logout(request)
    return Response({
        'message': 'Logout realizado com sucesso'
    })

class ReceitaViewSet(viewsets.ModelViewSet):
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Receita.objects.filter(
            usuario=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            usuario=self.request.user
        )


class DespesaViewSet(viewsets.ModelViewSet):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Despesa.objects.filter(
            usuario=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            usuario=self.request.user
        )

class InvestimentoViewSet(viewsets.ModelViewSet):
    queryset = Investimento.objects.all()
    serializer_class = InvestimentoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Investimento.objects.filter(
            usuario=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            usuario=self.request.user
        )

class FundoViewSet(viewsets.ModelViewSet):
    queryset = Fundo.objects.all()
    serializer_class = FundoSerializer
    permission_classes = [IsAuthenticated]  

    def get_queryset(self):
        return Fundo.objects.filter(
            usuario=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            usuario=self.request.user
        )

class ReceitaPlanejadaViewSet(viewsets.ModelViewSet):

    queryset = ReceitaPlanejada.objects.all()

    serializer_class = ReceitaPlanejadaSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return ReceitaPlanejada.objects.filter(
            usuario=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            usuario=self.request.user
        )

class DespesaPlanejadaViewSet(viewsets.ModelViewSet):

    queryset = DespesaPlanejada.objects.all()

    serializer_class = DespesaPlanejadaSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return DespesaPlanejada.objects.filter(
            usuario=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            usuario=self.request.user
        )

class InvestimentoPlanejadoViewSet(viewsets.ModelViewSet):

    queryset = InvestimentoPlanejado.objects.all()

    serializer_class = InvestimentoPlanejadoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return InvestimentoPlanejado.objects.filter(
            usuario=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            usuario=self.request.user
        )

class FundoPlanejadoViewSet(viewsets.ModelViewSet):

    queryset = FundoPlanejado.objects.all()

    serializer_class = FundoPlanejadoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return FundoPlanejado.objects.filter(
            usuario=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            usuario=self.request.user
        )    