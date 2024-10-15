<template>
<div class="shopping-cart">
    <h3>Shopping Cart</h3>
    <div  class="cart-item">
    <div class="cart-info">
        <h4></h4>
        <p>Quantity: </p>
    </div>
    <div class="cart-action">
        <p>$</p>
        <button class="update-btn">Update</button>
        <button class="remove-btn">Remove</button>
    </div>
    </div>
    <div class="subtotal">
    <p>Subtotal: $</p>
    <!-- <p class="update-success">Update product successfully</p> -->
    </div>
</div>
</template>

<script setup>
</script>

<style scoped>
.shopping-cart {
width: 40%;
float: right;
}

.cart-item {
display: flex;
justify-content: space-between;
margin-bottom: 10px;
padding: 10px;
border: 1px solid #ddd;
}

.cart-info {
width: 70%;
}

.cart-action {
text-align: right;
}

.update-btn,
.remove-btn {
background: none;
border: none;
color: #007bff;
cursor: pointer;
margin-left: 10px;
}

.subtotal {
margin-top: 20px;
font-weight: bold;
}

.update-success {
color: green;
}
</style>
