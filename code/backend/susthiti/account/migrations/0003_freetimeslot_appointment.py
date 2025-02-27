# Generated by Django 4.2.13 on 2024-06-12 18:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_annonymoususer_aptitude_test_score_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='FreeTimeSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('doctor_or_teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='free_time_slots', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateTimeField()),
                ('end_time', models.DateTimeField()),
                ('details', models.TextField(blank=True)),
                ('doctor_or_teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scheduled_appointments', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
