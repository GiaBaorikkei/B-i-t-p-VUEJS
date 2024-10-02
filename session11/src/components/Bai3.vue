<template>
    <div>
      <h4>Current Company: {{ company }}</h4>
      <h4>Age: {{ age }}</h4>
      <button @click="randomAge">Random</button>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from "vue";
  
  const age = ref(1);
  const companies = ["Rikkei Academy", "Rikkei Education", "Rikkei Fukuoka"];
  const company = ref(companies[0]);
  
  const randomAge = () => {
    age.value = Math.floor(Math.random() * 10) + 1;
  };
  
  watch(age, (newValue) => {
    company.value = companies[(newValue - 1) % companies.length];
    console.log("Dữ liệu đã thay đổi: ", newValue);
  });
  
  onMounted(() => {
    console.log("Component đã được mount.");
  });
  </script>
  
  <style>
  </style>
  