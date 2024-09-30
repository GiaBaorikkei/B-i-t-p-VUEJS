<template>
  <div>
    <h2>Bài 1</h2>
    <ParentComponent/>
    <br>
    <h2>Bài 2</h2>
    <ProductParent/>
    <br>
    <h2>Bài 3</h2>
    <CountParent/>
    <br>
    <h3>Bài 4</h3>
    <TodoApp/>
    <br>
    <h3>Bài 5</h3>
    <IndexModal/>
    <br>
    <h3>Bài 6</h3>
    <IndexCard/>
    <br>
    <h3>Bài 7</h3>
    <MessageParent/>
    <br>
    <h3>Bài 8</h3>
    <ListUser/>
    <br>
  </div>
</template>
<script setup>
import CountParent from './components/CountParent.vue';
import IndexCard from './components/IndexCard.vue';
import IndexModal from './components/IndexModal.vue';
import ListUser from './components/ListUser.vue';
import MessageParent from './components/MessageParent.vue';
import ParentComponent from './components/ParentComponent.vue';
import ProductParent from './components/ProductParent.vue';
import TodoApp from './components/TodoApp.vue';

</script>
<style>
  
</style>