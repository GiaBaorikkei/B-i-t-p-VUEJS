<template>
    <div>
        <h3>Email</h3>
        <input type="text" v-model="inputValue">
        <p>Giá trị: {{ inputValue }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const inputValue = ref("")
</script>
<style>
    
</style>