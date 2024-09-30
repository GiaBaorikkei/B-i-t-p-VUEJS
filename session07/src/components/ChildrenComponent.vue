<template>
    <div>
      <h3>Children Component: {{ propName }} </h3>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['propName']);
  </script>
  
  <style>
  </style>
  