<template>
    <div class="titulo">
      <h1>{{ question }}</h1>  
    </div>
</template>

<script>
    export default {
        name: 'TheTest',
        props: {
        question: String
        }
    }

</script>

<style scoped>
    .titulo{
        margin: 10px;
    }
</style>