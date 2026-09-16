from django.db import models

class Receita(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao

class Despesa(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao

class Investimento(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao
    
class Fundo(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao

class ReceitaPlanejada(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao


class DespesaPlanejada(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao


class InvestimentoPlanejado(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao


class FundoPlanejado(models.Model):
    descricao = models.CharField(max_length=200)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    mes = models.CharField(max_length=20)

    def __str__(self):
        return self.descricao