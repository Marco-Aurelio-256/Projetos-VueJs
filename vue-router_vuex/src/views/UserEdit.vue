<template>
  <div>
    <pre>
{{$route.params.id}}
    </pre>
    <h1>
        Usuário
    </h1>
    <button @click="login()">
    &lt;---------&lt;
    </button>
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$router)
    },

    methods: {
        login() {
            this.$router.push('/')
            console.log('NIce')
        }
    }
}
</script>

<style>

</style>