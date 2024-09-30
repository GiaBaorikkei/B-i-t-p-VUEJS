<template>
    <div id="app">
      <Card>
        <template #header>
          Thông tin sản phẩm
        </template>
        <template #body>
          Đây là mô tả ngắn gọn về sản phẩm này. Sản phẩm có các tính năng nổi bật và giá cả hợp lý.
        </template>
        <template #footer>
          <button>Xem chi tiết</button>
        </template>
      </Card>
    </div>
  </template>
  
  <script setup>
  import Card from './Card.vue'; 
  
  </script>
  
  <style>
  </style>
  