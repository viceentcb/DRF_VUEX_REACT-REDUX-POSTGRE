# Generated by Django 3.1.7 on 2021-02-22 20:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bars', '0002_bar_reference_booking'),
        ('profiles', '0007_remove_booking_time'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='booking',
            unique_together={('person', 'bar')},
        ),
    ]