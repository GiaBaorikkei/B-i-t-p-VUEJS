<template>
    <div>
        <h3>Màu sắc</h3>
        <input type="color" v-model="inputValue">
        <p>Mã màu: {{ inputValue }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const inputValue = ref("")
</script>
<style>
    
</style>