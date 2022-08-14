<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->

  <HeaderTop/>

  <!--A maneira que o TheTest está implementando é inadequado-->
  <!--Basicamente uma tag h1 glorificada. Não alterarei por agora pois são apenas testes-->
  <section>
    <TheTest question="Que dia é hoje?"></TheTest>
    <h3>{{ dateNow }}</h3>
  </section>

  <section>
    <TheTest question="É natal?"></TheTest>  
    <h1 v-if="dateNow.startsWith('25 de Dezembro')" style="color: #5ca058;">Sim</h1>
    <h3 v-else style="color: #a81a4a;">Não</h3>
  </section>

 <section>
    <p v-if="curtidas===0">
      Ninguém curtiu esse site :c<br>
      Dá uma curtida ae :D
    </p>

    <p v-else-if="curtidas === 1">
      Este site recebeu {{ curtidas }} curtida<br>
      Obrigado ;)
    </p>

    <p v-else-if="curtidas >= 30 && curtidas < 60">
      Este site recebeu {{ curtidas }} curtidas<br>
      Eita tá subindo :o
    </p>

    <p v-else-if="curtidas >= 60 && curtidas < 90">
      Este site recebeu {{ curtidas }} curtidas<br>
      Oloko não para :O
    </p>

    <p v-else-if="curtidas >= 90 && curtidas < 120">
      Este site recebeu {{ curtidas }} curtidas<br>
      Tá tudo bem ae? o teu dispositvo não bugou? :U
    </p>

    <p v-else-if="curtidas >= 120 && curtidas < 150">
      Este site recebeu {{ curtidas }} curtidas<br>
      Ei! isso está doendo!  >:d
    </p>

    <p v-else-if="curtidas >= 150 && curtidas < 170">
      Este site recebeu {{ curtidas }} curtidas<br>
      Para!!! ;=;
    </p>

    <p v-else-if="curtidas >= 170">
      Este site recebeu {{ curtidas }} curtidas<br>
      *Morto* x-x
    </p>

    <p v-else>
      Este site recebeu {{ curtidas }} curtidas<br>
      Obrigado ;)
    </p>

    <button v-on:click="like()">
    👍 Curtir
    </button>

  </section>

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
      curtidas: 0,
      dateNow: date,
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
  },

  methods: {
    like(){
      this.curtidas++
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

  section{
    padding: 10px;
    margin-top: 10px;
    margin-left: 10%;
    margin-right: 10%;
    background-color: #630726;
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
