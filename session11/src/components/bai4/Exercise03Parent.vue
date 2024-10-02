<template>
    <div>
      <h2>Parent Component</h2>
      <h4>Age: {{ age }}</h4>
      <button @click="increaseAge">Increase age</button>
      <Exercise03Children :age="age" />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Exercise03Children from './Exercise03Children.vue';
  
  const age = ref(1);
  
  const increaseAge = () => {
    age.value++;
  };
  </script>
  
  <style>
  </style>
  