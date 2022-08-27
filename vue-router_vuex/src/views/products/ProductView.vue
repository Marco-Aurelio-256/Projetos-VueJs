<template>
  <div class="product">
    <h3>{{product.name}}</h3>
    <p>R$ {{product.price}}</p>
    <button class='green' @click="addProduct()">Adicionar</button> | 
    <button
        class="red"
        @click="removeProduct()"
    >Remover</button>
  </div>
</template>

<script>
export default {
    props: {
        product: Object
    },

    methods: {
        addProduct(){
            this.$store.commit('addProduct', this.product)
        },

        removeProduct(){
            this.$store.commit('removeProduct', this.product.id)
        }
    }
}
</script>

<style scoped>
.product{
    border: 1px solid;
    border-radius: 16px;
    margin-right: 10%;
    margin-top: 10px;
    width: 100%;
    padding: 10%
}
button{
    transition: 0.3s;
    padding: 10px;
    border: none;
    border-radius: 10px;
    color: white;
}

.green{
    background-color: rgb(7, 170, 7);
}

.green:hover{
    transition: 0.3s;
    background-color: rgb(0, 99, 0);

}

.red{
    background-color: rgb(207, 2, 2);
}

.red:hover{
    transition: 0.3s;
    background-color: rgb(116, 10, 2);

}
</style>