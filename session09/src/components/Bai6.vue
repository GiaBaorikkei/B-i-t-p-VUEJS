<template>
    <div>
      <h3>Sở thích: {{ inputValue }}</h3>
      <input type="checkbox" value="Đá bóng" v-model="inputValue"> Đá bóng
      <input type="checkbox" value="Bóng chuyền" v-model="inputValue"> Bóng chuyền
      <input type="checkbox" value="Code" v-model="inputValue"> Code
      <input type="checkbox" value="Bơi lội" v-model="inputValue"> Bơi lội
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
  
const inputValue = ref([]); 
</script>
  
<style>
</style>
  