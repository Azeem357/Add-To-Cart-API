from django.urls import path
from . import views
urlpatterns = [
    path('products/',views.productListApiView.as_view())
]
