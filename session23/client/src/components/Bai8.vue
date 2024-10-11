<template>
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <p>{{ user.student_name }}</p>
          <button @click="confirmDelete(user.id)">Xóa</button>
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
  
      <div v-if="isModalVisible" class="modal">
        <div class="modal-content">
          <h3>Xác nhận xóa</h3>
          <p>Bạn có chắc chắn muốn xóa sinh viên này không?</p>
          <button @click="cancelDelete">Hủy</button>
          <button @click="deleteUser(selectedUserId)">Xóa</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  
  const users = ref([]);
  const isModalVisible = ref(false); 
  const selectedUserId = ref(null); 
  
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
    users.value = res.data;
  };
  
  const confirmDelete = (id) => {
    selectedUserId.value = id; 
    isModalVisible.value = true; 
  };
  
  const cancelDelete = () => {
    isModalVisible.value = false; 
  };
  
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      getAllStudent(); 
      isModalVisible.value = false; 
    } catch (error) {
      console.error("Lỗi khi xóa sinh viên:", error);
    }
  };
  
  const editUser = (user) => {
    updateStudent.value = { ...user };
  };
  
  const updateStudentById = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/users/${updateStudent.value.id}`, updateStudent.value);
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
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }
  
  button {
    margin: 10px;
  }
  </style>
  