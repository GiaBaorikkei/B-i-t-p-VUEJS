<!-- TodoApp.vue -->
<template>
    <div>
      <p>Id to delete: {{ idToDelete }}</p>
      <ul>
        <li v-for="item in todoList" :key="item.id">
          <TodoItem 
            :todo="item" 
            @delete="handleDelete" 
          />
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TodoItem from './TodoItem.vue';
  
  const todoList = ref([
    { id: 1, task: 'Code' },
    { id: 2, task: 'Quét nhà' },
    { id: 3, task: 'Nấu cơm' }
  ]);
  
  const idToDelete = ref(null);
  
  const handleDelete = (id) => {
    idToDelete.value = id; 
  };
  </script>
  
  <style>
  </style>
  