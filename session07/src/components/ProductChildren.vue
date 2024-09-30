<template>
    <div>
      <h3>Dữ liệu trong component con</h3>
      <div v-if="product">
        <p>Id: {{ product.id }}</p>
        <p>Product Name: {{ product.name }}</p>
        <p>Price: {{ product.price }} đ</p>
        <p>Quantity: {{ product.quantity }}</p>
      </div>
      <div v-else>
        <p>Dữ liệu chưa được truyền ...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    product: {
      type: Object, 
      required: true
    }
  });
  </script>
  
  <style>
  </style>
  