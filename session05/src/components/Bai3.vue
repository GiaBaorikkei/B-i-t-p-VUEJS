<template>
    <div>
      <p v-if="state.userRole === 'admin'">Quyền hạn của bạn là: Admin</p>
      <p v-else-if="state.userRole === 'user'">Quyền hạn của bạn là: User</p>
      <p v-else-if="state.userRole === 'guest'">Quyền hạn của bạn là: Guest</p>
      <p v-else>Không thể xác định</p>
    </div>
  </template>
  <script setup>
  import { reactive } from 'vue';
  
  const state = reactive({
    userRole: 'admin'
  });
  </script>
  
  <style scoped>
  
  </style>