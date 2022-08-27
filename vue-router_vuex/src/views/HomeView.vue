<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>

  <section>
    <h4>Informações da sessão atual (VUEX STATE):</h4>
    <p>
      Username: {{this.$store.state.user.username}} <br>
      E-mail: {{this.$store.state.user.email}} <br>
      Senha: {{this.$store.state.user.password}}
    </p>

    <label for="username">Username: </label>
    <input 
      type="text" id="username"
      v-model="user.username"
    >
    <br>
    <br>  
    <label for="email">E-mail: </label>
    <input 
      type="text" id="email"
      v-model="user.email"
    >
    <br>
    <br>
    <label for="password">Senha: </label>
    <input 
      type="password" id="password"
      v-model="user.password"
    >
    <br>
    <br>
    <button @click="updateUser()"> 
      Salvar Usuário
    </button>
  </section>

</template>

<script>
  export default {
    data() {
      return {
        user: [{
        "username": '',
        "email": '',
        "password": ''
        }]
      }
    },
  
    methods: {
      updateUser(){
        const User = {
          username: this.user.username,
          email: this.user.email,
          password: this.user.password
        }

        this.$store.commit('storeUser', User)

      }
    }
  }
</script>