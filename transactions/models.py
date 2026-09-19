from django.db import models
from django.contrib.auth.models import User

class Receita(models.Model):
    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,

    )

    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao

class Despesa(models.Model):
    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,

    )
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao

class Investimento(models.Model):
    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,

    )

    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao
    
class Fundo(models.Model):
    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,

    )

    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao

class ReceitaPlanejada(models.Model):
    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,

    )

    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao


class DespesaPlanejada(models.Model):
    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,

    )

    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao


class InvestimentoPlanejado(models.Model):
    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,

    )

    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao


class FundoPlanejado(models.Model):
    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
   
    )

    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao