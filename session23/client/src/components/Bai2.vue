<template>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.student_name }}
        </li>
      </ul>
    </div>
  </template>
  <script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  const users= ref([])
  // hàm lấy tất cả users
  const getAllStudent = async () => {
    let res = await axios.get("http://localhost:3000/users");
    console.log("tất cả user", res.data);
    users.value = res.data
  };
  onMounted(() => {
    getAllStudent();
  });
  </script>
  <style>
    
  </style>