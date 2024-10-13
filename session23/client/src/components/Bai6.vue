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

      <h2>Cập nhật sinh viên</h2>
      <input type="text" v-model="updateStudent.student_name" placeholder="Tên sinh viên" />
      <input type="email" v-model="updateStudent.email" placeholder="Email" />
      <input type="text" v-model="updateStudent.address" placeholder="Địa chỉ" />
      <input type="text" v-model="updateStudent.phone" placeholder="Số điện thoại" />
      <input type="checkbox" v-model="updateStudent.status" /> Hoạt động
      <button @click="updateStudentById">Cập nhật sinh viên</button>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  
  const users = ref([]);
  
  const updateStudent = ref({
    id: null, 
    student_name: '',
    email: '',
    address: '',
    phone: '',
    status: false
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
  
  const editUser = (user) => {
    updateStudent.value = { ...user };
  };
  
  const updateStudentById = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/users/${updateStudent.value.id}`, updateStudent.value);
      console.log("Kết quả trả về từ server sau khi cập nhật:", res.data);
      getAllStudent();
    } catch (error) {
      console.error("Lỗi khi cập nhật sinh viên:", error);
    }
  };
  
  onMounted(() => {
    getAllStudent();
  });
  </script>
  <style>
  </style>
  