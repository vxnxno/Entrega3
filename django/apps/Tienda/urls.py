from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio),
    path('agregarProducto',views.cargarAgregarProducto),
    path('agregarProductoForm',views.agregarProducto),
    path('editarProducto/<sku>',views.cargarEditarProducto),
    path('editarProductoForm',views.editarProducto),
    path('eliminarProducto/<sku>',views.eliminarProducto),
    path('carrito',views.carrito)

]