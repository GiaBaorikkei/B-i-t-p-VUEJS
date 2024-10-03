<template>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">TRANG CHỦ</v-tab>
        <v-tab value="two">GIỚI THIỆU</v-tab>
        <v-tab value="three">LIÊN HỆ</v-tab>
      </v-tabs>
  
      <v-card-text>
        <v-tabs-items v-model="tab">
          <v-tab-item value="one">
            <div v-if="tab === 'one'">Trang chủ</div>
          </v-tab-item>
  
          <v-tab-item value="two">
            <div v-if="tab === 'two'">Giới thiệu</div>
          </v-tab-item>
  
          <v-tab-item value="three">
            <div v-if="tab === 'three'">Liên hệ</div>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const tab = ref('one')
  </script>
  