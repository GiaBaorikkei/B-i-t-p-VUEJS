<template>
  <div>
    <h3>Thêm thông tin mượn trả sách</h3>
    <input v-model="newBook.title" placeholder="Tiêu đề sách" />
    <input v-model="newBook.borrowDate" type="date" />
    <input v-model="newBook.returnDate" type="date" />
    <button @click="submit">Thêm</button>
    <button @click="$emit('close')">Hủy</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close', 'add']);

const newBook = ref({
  title: '',
  borrowDate: '',
  returnDate: '',
  status: 'Chưa trả'
});

const submit = () => {
  if (validateInput(newBook.value)) {
    emit('add', { ...newBook.value, id: Date.now() });
    newBook.value = { title: '', borrowDate: '', returnDate: '', status: 'Chưa trả' };
  }
};

const validateInput = (book) => {
  return true; 
};
</script>

<style>
</style>
