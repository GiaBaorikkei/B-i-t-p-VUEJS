<template>
    <div class="listNumber">
        <p>Các số chẵn từ mảng:</p>
        <br>
        <p v-for="(number, index) in evenNumbers" :key="index">
        {{ number }}
      </p>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed } from 'vue';
  
  const state = reactive({
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
  });
  
  const evenNumbers = computed(() => {
    return state.numbers.filter(number => number % 2 === 0);
  });
  </script>
  
  <style scoped>
  .listNumber {
      display: flex;
      gap: 5px;
  }
  </style>