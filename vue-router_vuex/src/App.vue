<template>
  <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/about">Sobre</router-link> |
    <router-link to="/bira">Bira?</router-link> |
    <router-link to="/usuario/10">Usuário</router-link>
    <router-link to="/produto">Produto</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

section{
  border: 1px solid;
  border-radius: 16px;
  
  padding: 10px;
  margin-right: 10%;
  margin-left: 10%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
