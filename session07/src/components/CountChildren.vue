<template>
    <div>
      <button @click="handleIncrement">Increment</button>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(['increment']);
  
  const handleIncrement = () => {
    emit('increment');
  };
  </script>
  
  <style>
  </style>
  