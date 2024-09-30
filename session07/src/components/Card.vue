<template>
    <div class="card">
      <div class="card-header">
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
      <div class="card-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 16px;
    margin: 16px;
  }
  
  .card-header {
    font-weight: bold;
    font-size: 1.25em;
    margin-bottom: 8px;
  }
  
  .card-body {
    margin-bottom: 8px;
  }
  
  .card-footer {
    text-align: right;
  }
  </style>
  