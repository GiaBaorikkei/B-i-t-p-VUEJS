<template>
    <div>
      <h3>Count: {{ count }}</h3>
      <button @click="handleClick">Counter</button>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUpdated, ref } from "vue";
  
  const count = ref(0);
  const handleClick = () => {
    count.value++; 
  };
  onMounted(() => {
    console.log("Component đã được mount.");
  });
  onUpdated(() => {
    alert("Dữ liệu đã thay đổi");
  });
  </script>
  
  <style>
  </style>
  