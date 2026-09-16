from rest_framework import serializers

from .models import Receita, Despesa, Investimento, Fundo, ReceitaPlanejada, DespesaPlanejada, InvestimentoPlanejado, FundoPlanejado


class ReceitaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receita
        fields = ['id', 'descricao', 'valor', 'mes']

class DespesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Despesa
        fields = ['id', 'descricao', 'valor', 'mes']

class InvestimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investimento
        fields = ['id', 'descricao', 'valor', 'mes']

class FundoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fundo
        fields = ['id', 'descricao', 'valor', 'mes']

class ReceitaPlanejadaSerializer(serializers.ModelSerializer):

    class Meta:

        model = ReceitaPlanejada

        fields = ['id', 'descricao', 'valor', 'mes']


class DespesaPlanejadaSerializer(serializers.ModelSerializer):

    class Meta:

        model = DespesaPlanejada

        fields = ['id', 'descricao', 'valor', 'mes']


class InvestimentoPlanejadoSerializer(serializers.ModelSerializer):

    class Meta:

        model = InvestimentoPlanejado

        fields = ['id', 'descricao', 'valor', 'mes']


class FundoPlanejadoSerializer(serializers.ModelSerializer):

    class Meta:

        model = FundoPlanejado

        fields = ['id', 'descricao', 'valor', 'mes']