<template>
  <span class="text-h1 text-white font-weight-bold mt-10">A Calculadora</span>

  <v-container class="align-self-start d-flex flex-column w-50 px-6 py-6 mt-10 bg-login rounded-xl">
    <div class="d-flex flex-column text-white">
      <span class="text-h3">> LOGIN &lt;</span>
      <span class="text-h5">Insira seu login abaixo para entrar na calculadora!</span>
      <span class="text-h6">Login para calculadora???</span>
    </div>

    <v-form 
      v-model="valid"
      ref="form"
      lazy-validation
    >
      <v-container class="px-6 py-8 rounded-xl bg-white">
        <v-row>
          <v-col>
            <v-text-field
            v-model="this.userData.email"
            label="E-mail"
            :rules="emailRules"
            :value="this.userData.email"
            required>
            </v-text-field>
          </v-col>

          <v-col>
            <v-text-field
            v-model="this.userData.password"
            label="Senha"
            :rules="passwordRules"
            required>
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn
            color='success'
            @click="validate"
            >
            Entrar
          </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-alert           
            v-if="showInvalidLogin"
            type="error"
            title="Erro ao entrar!"
            class="text-left my-3">
            E-mail e senha incorretos
            </v-alert>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card variant="outlined" class="text-left">
              <v-card-title>Login para entrar:</v-card-title>
              <v-card-text>
                Email: asd@asd.com <br>
                Senha: asd
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
  <router-view/>
</template>

<script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  //import { useRoute } from 'vue-router'
  import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    //const route = useRoute()
    const router = useRouter()

    const valid = ref(false)
    const showInvalidLogin = ref(false)

    const userData = ref({
      email: store.state.user.email,
      password: store.state.user.password
    })

    //SYSTEM RULES
    const passwordRules = [
      v => !!v || 'É necessário informar uma senha!'
    ]

    const emailRules = [
      v => !!v || 'É necessário informar um e-mail',
      v => /.+@.+\..+/.test(v) || 'E-mail precisa ser válido',
    ]

    const validate = () => {
      const User = {
        email: userData.value.email,
        password: userData.value.password
      }

      store.commit('storeUser', User)
      store.dispatch('validateUser', User)
      
      if(store.state.userValid) {
        router.push('/calculator')
      } else {
        showInvalidLogin.value = true
      }
    }

    return {
      passwordRules,
      emailRules,
      showInvalidLogin,
      valid,
      userData,
      validate
    }
    
  },
}
</script>

<style>

.bg-login{
  background-color: #16213E;
}

body{
  background-color: #0F3460;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
