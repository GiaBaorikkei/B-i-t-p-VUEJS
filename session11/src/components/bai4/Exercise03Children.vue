<template>
    <div>
      <h2>Child Component</h2>
      <h4>Received Age: {{ age }}</h4>
    </div>
  </template>
  
  <script setup>
  import { onUpdated, watch, toRefs } from "vue";
  
  const props = defineProps({
    age: {
      type: Number,
      required: true,
    },
  });
 
  onUpdated(() => {
    alert("Giá trị của biến age đã thay đổi ");
  });
  
  watch(
    () => props.age,
    (newAge, oldAge) => {
      console.log(`Dữ liệu đã thay đổi: Từ ${oldAge} thành ${newAge}`);
    }
  );
  </script>
  
  <style>
  </style>
  