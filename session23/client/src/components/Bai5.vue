<template>
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <p>{{ user.student_name }}</p>
          <button @click="deleteUser(user.id)">Xóa</button>
        </li>
      </ul>
  
      <h2>Thêm mới sinh viên</h2>
      <input type="text" v-model="newStudent.student_name" placeholder="Tên sinh viên" />
      <input type="email" v-model="newStudent.email" placeholder="Email" />
      <input type="text" v-model="newStudent.address" placeholder="Địa chỉ" />
      <input type="text" v-model="newStudent.phone" placeholder="Số điện thoại" />
      <input type="checkbox" v-model="newStudent.status" /> Hoạt động
      <button @click="createStudent">Thêm sinh viên</button>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  
  const users = ref([]);

  const newStudent = ref({
    student_name: '',
    email: '',
    address: '',
    phone: '',
    status: false,
    created_at: new Date().toISOString().split('T')[0], // Lưu ngày tạo hiện tại
  });
  
  const getAllStudent = async () => {
    let res = await axios.get("http://localhost:3000/users");
    console.log("Tất cả sinh viên:", res.data);
    users.value = res.data;
  };
  
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    getAllStudent(); 
  };
  
  const createStudent = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users", newStudent.value);
      console.log("Kết quả trả về từ server:", res.data);
      getAllStudent(); 
    } catch (error) {
      console.error("Lỗi khi thêm sinh viên:", error);
    }
  };

  onMounted(() => {
    getAllStudent();
  });
  </script>
  
  <style>
  </style>
  