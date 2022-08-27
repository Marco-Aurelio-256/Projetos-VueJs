<template>
<div class="products">
  <div>
    <ProductView
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"
    >
    </ProductView>
  </div>

  <div class="cart">
    <h1>Seu Carrinho:</h1>
    <CartView
        v-for="product in $store.state.cart"
        :key="product.index"
        :product="product"
    >

    </CartView>
  </div>
</div>
</template>

<script>
import ProductView from './ProductView.vue';
import CartView from './CartView.vue';
export default {
    components: { ProductView, CartView }

    
}
</script>

<style scoped>
.cart{
    margin-bottom: 20px;
    padding: 10px;
    background-color: rgba(11, 11, 124, 0.699);
    color: white;
}

.products{
    display: flex;
    justify-content: space-around;
}
</style>