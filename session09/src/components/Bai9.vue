<template>
    <div>
      <h3>Đăng ký tài khoản</h3>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Tên sinh viên</label>
          <input type="text" id="name" v-model="user.name" ref="nameInput" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="user.email" />
        </div>
        <div>
          <label for="password">Mật khẩu</label>
          <input type="password" id="password" v-model="user.password" />
        </div>
        <div>
          <label for="phone">Số điện thoại</label>
          <input type="tel" id="phone" v-model="user.phone" />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
  
const user = ref({
    name: '',
    email: '',
    password: '',
    phone: ''
});
  
const nameInput = ref(null);
  
const isEmailDuplicate = (email) => {
const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some((u) => u.email === email);
};
  
const handleSubmit = () => {
    if (!user.value.name || !user.value.email || !user.value.password) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }
  
    if (isEmailDuplicate(user.value.email)) {
      alert('Email này đã được sử dụng.');
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ ...user.value });
    localStorage.setItem('users', JSON.stringify(users));
  
    alert("Đăng ký tài khoản thành công")

    

    user.value.name = '';
    user.value.email = '';
    user.value.password = '';
    user.value.phone = '';
    nameInput.value.focus();
};
  
onMounted(() => {
    nameInput.value.focus();
});
</script>
  
<style>
</style>
    