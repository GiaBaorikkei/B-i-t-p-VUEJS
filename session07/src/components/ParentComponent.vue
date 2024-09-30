<template>
  <div>
    <ChildrenComponent :propName="parentData" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildrenComponent from './ChildrenComponent.vue';

const parentData = ref('Rikkei Academy');
</script>

<style>
</style>
