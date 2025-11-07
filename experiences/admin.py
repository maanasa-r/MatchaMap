from django.contrib import admin

from .models import MatchaExperience


@admin.register(MatchaExperience)
class MatchaExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'spot', 'rating', 'created_at')
    list_filter = ('rating', 'spot')
    search_fields = ('title', 'content', 'user__username', 'spot__name')
    readonly_fields = ('created_at', 'updated_at')
