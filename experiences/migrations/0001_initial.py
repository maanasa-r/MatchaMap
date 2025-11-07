from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('matcha_spots', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MatchaExperience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('content', models.TextField()),
                ('rating', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('spot', models.ForeignKey(blank=True, null=True, on_delete=models.SET_NULL, related_name='experiences', to='matcha_spots.matchaspot')),
                ('user', models.ForeignKey(on_delete=models.CASCADE, related_name='matcha_experiences', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
