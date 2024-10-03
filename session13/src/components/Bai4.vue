<template>
    <div>
        <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Quản trị viên
        </v-btn>
      </template>
      <v-list>
        <v-list-item>Thông tin cá nhân</v-list-item>
        <v-list-item>Đổi mật khẩu</v-list-item>
        <v-list-item>Đăng xuất</v-list-item>
      </v-list>
    </v-menu>
    </div>
</template>
<script setup>
</script>
<style>
    
</style>