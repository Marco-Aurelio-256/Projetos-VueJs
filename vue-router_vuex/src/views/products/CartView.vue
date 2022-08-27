<template>
  <div class="cart-product">
    <p>
        {{product.name}} <br>
        R${{product.price}}
    </p>
  </div>
</template>

<script>
export default {
    props:{
        product: Object
    }
}
</script>

<style scoped>
.cart-product{
    padding: 6px;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 20%;
    margin-left: 20%;
    background-color: white;
    color: black;
    border-radius: 10px;
}

button{
    background: red;
    color: white;
    border: none;
    font-weight: bold;
}
</style>