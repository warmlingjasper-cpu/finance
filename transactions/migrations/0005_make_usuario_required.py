from django.db import migrations, models
import django.db.models.deletion
from django.contrib.auth.models import User


class Migration(migrations.Migration):

    dependencies = [
        ("transactions", "0004_despesa_usuario_despesaplanejada_usuario_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="receita",
            name="usuario",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="auth.user",
            ),
        ),
        migrations.AlterField(
            model_name="despesa",
            name="usuario",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="auth.user",
            ),
        ),
        migrations.AlterField(
            model_name="investimento",
            name="usuario",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="auth.user",
            ),
        ),
        migrations.AlterField(
            model_name="fundo",
            name="usuario",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="auth.user",
            ),
        ),
        migrations.AlterField(
            model_name="receitaplanejada",
            name="usuario",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="auth.user",
            ),
        ),
        migrations.AlterField(
            model_name="despesaplanejada",
            name="usuario",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="auth.user",
            ),
        ),
        migrations.AlterField(
            model_name="investimentoplanejado",
            name="usuario",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="auth.user",
            ),
        ),
        migrations.AlterField(
            model_name="fundoplanejado",
            name="usuario",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="auth.user",
            ),
        ),
    ]