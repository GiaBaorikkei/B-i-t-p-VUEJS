<template>
    <div>
      <h1 :id="elementId" :class="elementClass">Heading</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        elementId: 'heading-id',
        elementClass: 'heading-class'
      };
    }
  };
  </script>
  
  <style>
  .heading-class {
    font-size: 32px;
  }
  </style>
  