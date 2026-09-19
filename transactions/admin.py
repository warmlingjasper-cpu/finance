from django.contrib import admin

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


admin.site.register(Receita)
admin.site.register(Despesa)
admin.site.register(Investimento)
admin.site.register(Fundo)
admin.site.register(ReceitaPlanejada)
admin.site.register(DespesaPlanejada)
admin.site.register(InvestimentoPlanejado)
admin.site.register(FundoPlanejado)