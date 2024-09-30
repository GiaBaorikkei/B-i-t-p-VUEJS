<template>
    <div>
        <h2>User List</h2>
        <button @click="showForm = true">Add user</button>
        
        <FormAddUser v-if="showForm" @closeForm="showForm = false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import FormAddUser from './FormAddUser.vue';

const showForm = ref(false);
</script>

<style>
</style>
