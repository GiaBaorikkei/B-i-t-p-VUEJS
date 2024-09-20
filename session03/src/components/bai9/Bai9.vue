<template>
    <div>
      <button @click="increment">Click me {{ count }} lần</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  