from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import re_path
from django.views.static import serve

from . import views
urlpatterns = [
    path('', views.home, name='home'),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT})
    ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

    

