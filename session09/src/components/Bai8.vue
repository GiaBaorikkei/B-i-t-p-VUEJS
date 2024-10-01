<template>
    <div>
        <h3>Thêm mới tài khoản</h3>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="userName">Họ và tên:</label>
          <input type="text" v-model="product.userName" required>
        </div>
  
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="product.email" required>
        </div>
  
        <div>
          <label for="passWord">Mật khẩu:</label>
          <input type="password" v-model="product.passWord" required>
        </div>
  
        <div>
          <label for="confirmPassword">Nhập lại mật khẩu:</label>
          <input type="password" v-model="product.confirmPassword" required>
        </div>
  
        <button type="submit">Đăng ký</button>
      </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const product = ref({
userName: '',
email: '',
passWord: '',
confirmPassword: ''
});

const handleSubmit = () => {
console.log(product.value);
};
</script>

<style>
</style>
  