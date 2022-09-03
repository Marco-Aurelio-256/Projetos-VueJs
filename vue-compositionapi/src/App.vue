<template>

  <AppButton>Salve</AppButton>
  <br><br>

  <AppHook v-if="showAppHook"></AppHook>
  <button @click="showAppHook = !showAppHook">
    Toggle
  </button>

  {{name}}<br><br>
  {{fullName}}
  <br><br>
  {{admin.first_name}}
  {{admin.last_name}}
  <br><br>
  
  <button @click="user.last_name = 'funfo?'">Outro botão de este</button>
  <button @click="changeName">Botão de teste</button>

  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { ref, computed, watch} from 'vue'
import AppHook from './components/AppHook.vue'
import AppButton from './components/AppButton.vue'

export default {
    setup() {
        let name = "Eu não tenho reatividade :(";
        const user = ref({
            first_name: "Oi",
            last_name: "Tchau"
        });
        const admin = ref({
            first_name: "Admin",
            last_name: "Doido"
        });

        const showAppHook = ref(true)

        const fullName = computed(() => {
            return `${user.value.first_name} ${user.value.last_name}`;
        });
        watch(user, () => {
            console.log("LOL");
        }, {
            deep: true
        });
        watch(() => user.value.first_name, () => {
            console.log("Agora quando o primeiro nome muda eu apareço ;)");
        }, {
            deep: true
        });
        const changeName = () => {
            alert("IRAAAAAAAA");
            name = "Oh meu deus, agora eu sou reativo";
            user.value.first_name = "Clicou";
            user.value.last_name = "no botão :)";
            admin.value.last_name = "normal";
        };
        return {
            user,
            name,
            admin,
            changeName,
            fullName,
            showAppHook
        };
    },
    components: { AppHook, AppButton }
}
</script>>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
