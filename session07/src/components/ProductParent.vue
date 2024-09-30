<template>
    <div>
      <h2>Product Parent Component</h2>
      <ProductChildren :product="products" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ProductChildren from './ProductChildren.vue';
  
  const products = ref({
    id: 1,
    name: 'Bưởi Ba Roi',
    price: 12000,
    quantity: 10
  });
  </script>
  
  <style>
  </style>
  