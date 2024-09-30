<template>
    <div class="form-container">
        <h3>Add User</h3>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input type="text" v-model="name" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div>
                <label for="address">Address:</label>
                <input type="text" v-model="address" required />
            </div>
            <button type="button" @click="closeForm">Close</button>
        </form>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits();

const closeForm = () => {
    emit('closeForm'); 
};

const submitForm = () => {
    closeForm();
};
</script>

<style>
.form-container {
    border: 1px solid #ccc;
    padding: 20px;
    margin-top: 20px;
}
</style>
