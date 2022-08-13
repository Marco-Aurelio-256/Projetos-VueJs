<template>
    <h1 class="titulo">{{ x }}</h1>
</template>

<script>
    export default {
        name: 'TheTest',
        props: {
        x: String
    }
}
</script>

<style>
    .titulo{
        color:pink;
    }
</style>