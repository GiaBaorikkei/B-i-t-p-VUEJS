<template>
  <div>
    <h3>Sửa thông tin mượn trả sách</h3>
    <input v-model="book.title" placeholder="Tiêu đề sách" />
    <input v-model="book.borrowDate" type="date" />
    <input v-model="book.returnDate" type="date" />
    <button @click="submit">Cập nhật</button>
    <button @click="$emit('close')">Hủy</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const emit = defineEmits(['close', 'update']);
const props = defineProps({
  book: Object
});

const submit = () => {
  emit('update', { ...props.book });
};
</script>

<style>
</style>
