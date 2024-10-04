<template>
  <div>
    <h1>Bài 1</h1>
    <br>
    <h1>Bài 2</h1>
    <br>
    <h1>Bài 3</h1>
    <br>
    <h1>Bài 4</h1>
    <br>
    <h1>Bài 5</h1>
    <br>
    <h1>Bài 6</h1>
    <RouterLink to='/'>click home</RouterLink>
    <RouterLink to='/contact'>click contact</RouterLink>
    <h1>Bài 7</h1>
    <RouterLink to='/' exact-active-class="active">click home</RouterLink>
    <RouterLink to='/product' exact-active-class="active">click Product</RouterLink>
    <RouterLink to='/detail' exact-active-class="active">click Detail</RouterLink>
    <br>
    <h1>Bài 8</h1>
    <Navbar/>
    <RouterView/>
  </div>
</template>
<script setup>
import Navbar from './views/Navbar.vue';

</script>
<style>
  .active {
  font-weight: bold;
  color: blue;
}
</style>