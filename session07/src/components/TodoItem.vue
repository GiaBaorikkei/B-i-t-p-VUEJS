<!-- TodoItem.vue -->
<template>
    <div>
      <h4>------- TodoItem Component -------</h4>
      <span>{{ todo.task }}</span>
      <button @click="handleDelete">Delete</button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    todo: {
      type: Object,
      required: true
    }
  });
  
  const emit = defineEmits(['delete']);
  
  const handleDelete = () => {
    emit('delete', props.todo.id);
  };
  </script>
  
  <style>
  </style>

