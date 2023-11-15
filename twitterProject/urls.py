
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='base/base.html'), name='base'),
    path('admin/', admin.site.urls),
    path('twitter/', include('twitterApp.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)

