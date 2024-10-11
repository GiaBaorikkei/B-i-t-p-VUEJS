<template>
  <div>
    <h2>Student Detail</h2>
    <input type="number" v-model="studentId" placeholder="Enter Student ID" />
    <button @click="getStudentById">Get Student</button>
    <p></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const studentId = ref();

const getStudentById = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/users?id=${studentId.value}`);
    if (res.data.length > 0) {
      console.log(res.data[0]);
    } else {
      console.log("Không tìm thấy bản ghi");
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<style>
</style>
