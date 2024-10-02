<template>
    <div>
      <h4>Chiều rộng của cửa sổ: {{ windowWidth }} px</h4>
    </div>
</template>
    
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
  
  const windowWidth = ref(window.innerWidth); 
  
  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    window.addEventListener("resize", updateWindowWidth);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWindowWidth);
  });
  </script>
    
    <style  >
  </style>
    