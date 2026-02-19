from django.shortcuts import render
from django.db.models import Max
from django.http import JsonResponse
from cart.serializers import ProductSerializer,OrderSerializer,productInfoSerializer
from .models import Product,Order
from rest_framework import generics
class productListApiView(generics.ListAPIView):
       queryset = Product.objects.all()
       serializer_class = ProductSerializer