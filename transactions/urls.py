from rest_framework.routers import DefaultRouter

from .views import (
    ReceitaViewSet,
    DespesaViewSet,
    InvestimentoViewSet,
    FundoViewSet,
    ReceitaPlanejadaViewSet,
    DespesaPlanejadaViewSet,
    InvestimentoPlanejadoViewSet,
    FundoPlanejadoViewSet,
    logout_view,
)

router = DefaultRouter()

router.register('receitas', ReceitaViewSet)
router.register('despesas', DespesaViewSet)
router.register('investimentos', InvestimentoViewSet)
router.register('fundo', FundoViewSet)

router.register('receitas-planejadas', ReceitaPlanejadaViewSet)

router.register('despesas-planejadas', DespesaPlanejadaViewSet)

router.register('investimentos-planejados', InvestimentoPlanejadoViewSet)

router.register('fundo-planejado', FundoPlanejadoViewSet)

from django.urls import path

urlpatterns = router.urls + [
    path('logout/', logout_view, name='logout'),
]