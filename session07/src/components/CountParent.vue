<template>
    <div>
      <p>Count: {{ count }}</p>
      <CountChildren @increment="incrementCount" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CountChildren from './CountChildren.vue';
  
  const count = ref(0);
  
  const incrementCount = () => {
    count.value++;
  };
  </script>
  
  <style>
  </style>
  