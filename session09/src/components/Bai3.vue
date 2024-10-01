<template>
    <div>
        <h3>Ngày sinh</h3>
        <input type="date" v-model="inputValue">
        <p>Ngày sinh: {{ inputValue }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const inputValue = ref("")
</script>
<style>
    
</style>