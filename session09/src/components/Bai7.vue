<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="productId">Mã sản phẩm:</label>
          <input type="text" v-model="product.productCode" required>
        </div>
  
        <div>
          <label for="productName">Tên sản phẩm:</label>
          <input type="text" v-model="product.productName" required>
        </div>
  
        <div>
          <label for="price">Giá:</label>
          <input type="number" v-model="product.price" required>
        </div>
  
        <div>
          <label for="quantity">Số lượng:</label>
          <input type="number" v-model="product.quantity" required>
        </div>
  
        <button type="submit">Thêm mới</button>
      </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const product = ref({
productCode: '',
productName: '',
price: '',
quantity: ''
});

const handleSubmit = () => {
console.log(product.value);
};
</script>

<style>
</style>
  