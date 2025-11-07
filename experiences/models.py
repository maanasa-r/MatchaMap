from django.conf import settings
from django.db import models


class MatchaExperience(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='matcha_experiences'
    )
    spot = models.ForeignKey(
        'matcha_spots.MatchaSpot',
        on_delete=models.SET_NULL,
        related_name='experiences',
        null=True,
        blank=True
    )
    title = models.CharField(max_length=200)
    content = models.TextField()
    rating = models.PositiveSmallIntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        spot_name = self.spot.name if self.spot else 'General'
        return f"{self.title} - {self.user.username} ({spot_name})"
