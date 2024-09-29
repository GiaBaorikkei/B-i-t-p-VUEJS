<template>
    <div>
      <input v-model="inputValue" />
    </div>
  </template>
  <script setup>
  import { ref, watch } from 'vue';
  const inputValue = ref('');
  watch(inputValue, (newValue, oldValue) => {
    console.log(`Giá trị thay đổi từ: "${oldValue}" ==> ${newValue}`);
  });
  </script>
  
  <style>
  
  </style>