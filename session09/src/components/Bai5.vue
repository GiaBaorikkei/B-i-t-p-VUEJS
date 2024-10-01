<template>
    <div>
        <h3>Giới tính:{{ inputValue }}</h3>
        <input type="radio" value="Nam" v-model="inputValue"> Nam
        <input type="radio" value="Nữ" v-model="inputValue"> Nữ
        <input type="radio" value="Khác" v-model="inputValue"> Khác
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const inputValue = ref("")
</script>
<style>
    
</style>