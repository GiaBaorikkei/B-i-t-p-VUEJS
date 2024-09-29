<template>
    <div>
  
      <input type="number" v-model="number"/>
      
      <p>Giá trị hiện tại: {{ number }}</p>
      <p>Giá trị bình phương: {{ square }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  
  const number = ref(0);
  
  const square = computed(() => number.value ** 2);
  
  watch(number, (newValue, oldValue) => {
    console.log(`Giá trị thay đổi từ "${oldValue} đến ${newValue}`);
  });
  </script>
  
  <style scoped>
  
  </style>