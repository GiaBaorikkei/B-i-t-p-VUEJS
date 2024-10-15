<template>
<div class="product-list">
    <h3>List Product</h3>
    <div class="product-item">
    <div class="product-info">
        <h4></h4>
        <p></p>
        <p>Total: </p>
    </div>
    <div class="product-action">
        <input type="number" />
        <p>Price: $</p>
        <button class="add-to-cart">Add to cart</button>
    </div>
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
    const store = useStore();
    const getAllProduct = ()=> {
        store.dispatch("getAllProduct");
    }
    onMounted(()=>{
        getAllProduct();
    });

</script>

<style scoped>
.product-list {
width: 50%;
float: left;
}

.product-item {
display: flex;
justify-content: space-between;
margin-bottom: 10px;
padding: 10px;
border: 1px solid #ddd;
}

.product-info {
width: 70%;
}

.product-action {
text-align: right;
}

.add-to-cart {
background-color: blue;
color: white;
padding: 5px 10px;
border: none;
cursor: pointer;
}

input {
width: 50px;
margin-right: 10px;
}
</style>
