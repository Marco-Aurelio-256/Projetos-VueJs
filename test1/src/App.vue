<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TheTest x="Nice Demias"/>
  <HelloWorld msg="KD"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheTest from './components/TheTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheTest
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
