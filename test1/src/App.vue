<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <TheTest question="Que dia é hoje?"></TheTest>
  <h3>{{ dateNow }}</h3>

  <TheTest question="É natal?"></TheTest>  

  <h1 v-if="dateNow.startsWith('25 de Dezembro')" style="color: #5ca058;">Sim</h1>
  <h3 v-else style="color: #a81a4a;">Não</h3>

  <TheTest question="Você é admin?"></TheTest>

  <h3 v-if="acessLevel === 'admin'" style="color: #5ca058;">Sim</h3>
  <h3 v-else style="color: #a81a4a;">Não</h3>

  <h1>Rank dos mais legais:</h1>
  <div
    v-for="obj in todos"
    v-bind:key="obj.id"
  >
    {{obj.id+1}} ° - {{ obj.name}}

  </div>

  <h6>Não há o mais legal</h6>

  

</template>

<script>
  import TheTest from './components/TheTest.vue'

  var today = new Date();
  
  var fMes
  switch(today.getMonth()+1) {
    case 1: fMes = 'Janeiro'; break;
    case 2: fMes = 'Fevereiro'; break;
    case 3: fMes = 'Março'; break;
    case 4: fMes = 'Abril'; break;
    case 5: fMes = 'Maio'; break;
    case 6: fMes = 'Junho'; break;
    case 7: fMes = 'Julho'; break;
    case 8: fMes = 'Agosto'; break;
    case 9: fMes = 'Setembro'; break;
    case 10: fMes = 'Outubro'; break;
    case 11: fMes = 'Novembro'; break;
    case 12: fMes = 'Dezembro'; break;
  }

  var date = today.getDate()+' de '+fMes+', '+today.getFullYear()

  export default {
    name: 'App',
    components: {
      TheTest
    },

    data() {
      return {
        dateNow: date,
        acessLevel: 'admin',
        todos: [
          {
            "id": 1,
            "name": "Leanne Graham",
          },
          {
            "id": 2,
            "name": "Ervin Howell",
          },
          {
            "id": 3,
            "name": "Clementine Bauch",
          },
          {
            "id": 4,
            "name": "Patricia Lebsack",
          },
          {
            "id": 5,
            "name": "Chelsey Dietrich",
          }
        ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff4f7;
    margin-top: 60px;
  }

  body{
    background-color: #240b28;
  }

</style>
