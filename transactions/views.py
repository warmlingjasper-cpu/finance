from rest_framework import viewsets

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


class ReceitaViewSet(viewsets.ModelViewSet):
    queryset = Receita.objects.all()
    serializer_class = ReceitaSerializer

class DespesaViewSet(viewsets.ModelViewSet):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer

class InvestimentoViewSet(viewsets.ModelViewSet):
    queryset = Investimento.objects.all()
    serializer_class = InvestimentoSerializer

class FundoViewSet(viewsets.ModelViewSet):
    queryset = Fundo.objects.all()
    serializer_class = FundoSerializer
    

class ReceitaPlanejadaViewSet(viewsets.ModelViewSet):

    queryset = ReceitaPlanejada.objects.all()

    serializer_class = ReceitaPlanejadaSerializer


class DespesaPlanejadaViewSet(viewsets.ModelViewSet):

    queryset = DespesaPlanejada.objects.all()

    serializer_class = DespesaPlanejadaSerializer


class InvestimentoPlanejadoViewSet(viewsets.ModelViewSet):

    queryset = InvestimentoPlanejado.objects.all()

    serializer_class = InvestimentoPlanejadoSerializer


class FundoPlanejadoViewSet(viewsets.ModelViewSet):

    queryset = FundoPlanejado.objects.all()

    serializer_class = FundoPlanejadoSerializer