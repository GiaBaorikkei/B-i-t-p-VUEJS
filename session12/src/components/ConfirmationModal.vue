<template>
  <div>
    <p>Bạn có chắc chắn muốn xóa không?</p>
    <button @click="$emit('confirm')">Xóa</button>
    <button @click="$emit('close')">Hủy</button>
  </div>
</template>

<script setup>
</script>

<style>
</style>
