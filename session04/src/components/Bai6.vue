<template>
    <div>
      <input type="number" v-model="inputValue" />
      <button @click="addToCart">Add to cart</button>
      <h3>Tổng tiền trong giỏ hàng: {{ totalPrice }}</h3>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const inputValue = ref(0);
  const total = ref(0);
  
  const totalPrice = computed(() => total.value);
  
  const addToCart = () => {
    total.value += Number(inputValue.value);
    inputValue.value = 0;
  };
  </script>
  
  <style scoped>
  
  </style>