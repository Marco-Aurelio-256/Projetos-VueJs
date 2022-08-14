<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->

  <HeaderTop/>

  <!--A maneira que o TheTest está implementando é inadequado-->
  <!--Basicamente uma tag h1 glorificada. Não alterarei por agora pois são apenas testes-->
  <TheTest question="Que dia é hoje?"></TheTest>
  <h3>{{ dateNow }}</h3>

  <TheTest question="É natal?"></TheTest>  

  <h1 v-if="dateNow.startsWith('25 de Dezembro')" style="color: #5ca058;">Sim</h1>
  <h3 v-else style="color: #a81a4a;">Não</h3>

  <TheTest question="Você é admin?"></TheTest> 
  <h3 v-if="acessLevel === 'admin'" style="color: #5ca058;">Sim</h3>
  <h3 v-else style="color: #a81a4a;">Não</h3>

  <section class="ranking-list">
    <h1>Rank dos mais legais:</h1>

    <div class="ranking-item">
      <span
        v-for="obj in todos"
        :key="obj.id"
      >
      {{obj.id}}° - {{ obj.name}}<br>
      </span> 
    </div>
  </section>

  <p :class="pClass">
    lipson
  </p>

</template>

<script>
  import TheTest from './components/TheTest.vue'
  import HeaderTop from './components/HeaderTop.vue'
  import * as month from './js/FormatMonth.js'

  var today = new Date()
  var fMes = ''

  fMes = month.getFormattedMonth(today.getMonth()+1)

  var date = today.getDate()+' de '+fMes+', '+today.getFullYear()

  export default {
    name: 'App',
    components: {
    HeaderTop,
    TheTest
},

    data() {
      return {
        dateNow: date,
        acessLevel: 'admin',
        pClass: ['text','title'],
        
        isTitle: true,
        isGrennFont: true,
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
  }

  .ranking-list{
    justify-content: center;
  }

  .ranking-item{
    display: inline-block;
    text-align: left;
  }

  .text{
    color: green;
  }

  .title{
    font-size: 50px;
  }

  body{
    background-color: #20122c;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

</style>
