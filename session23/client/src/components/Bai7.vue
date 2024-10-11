<template>
    <div>
        <h2>Danh sách sinh viên</h2>
        <ul>
        <li v-for="user in users" :key="user.id">
          <p>{{ user.student_name }}</p>
          <button @click="deleteUser(user.id)">Xóa</button>
          <button @click="editUser(user)">Sửa</button>
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