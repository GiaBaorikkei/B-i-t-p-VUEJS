<template>
    <div>
        <input type="range" v-model="inputValue">
        <p>Tiến độ hoàn thành: {{ inputValue }} %</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const inputValue = ref("")
</script>
<style>
    
</style>