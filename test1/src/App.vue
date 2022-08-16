<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->

  <TheSidebar/>
  <!--A maneira que o TheTest está implementando é inadequado-->
  <!--Basicamente uma tag h1 glorificada. Não alterarei por agora pois são apenas testes-->
  <main>
    <HeaderTop/>
    <section>
      <TheTest question="Que dia é hoje?"></TheTest>
      <h3>{{ dateBuilder() }}</h3>
    </section>

    <section>
      <TheTest question="É natal?"></TheTest>  
      <h1 v-if="dateBuilder().includes('25 Dezembro')" style="color: #5ca058;">Sim</h1>
      <h3 v-else style="color: #a81a4a;">Não</h3>
    </section>

    <section>
      <div class="form-area">
        <div class="form">
          <label for="user">Usuário</label><br>
        <input
          type="text" id="user" name="username"
          v-model="user"
        >

        <br>
        <br>

        <label for="pass">Senha</label><br>
        <input
          type="password" id="pass" name="password"
          v-model="pw"
        >
        </div>

        <div class="btn-form">
          <button
            class="btn-green"
            type="button" onclick="alert('Logado?')"
            >
            Login
          </button>

          <button
            class="btn-red"
            type="button" onclick="alert('Campos cancelados')">
            Cancelar
          </button>
        </div>
      </div>

      Usuário: {{user}}<br>
      Senha:  {{pw}}
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

     <section>
      <p :class="pClass">
      lipson
    </p>
     </section>
  </main>
</template>

<script>
  import TheTest from './components/TheTest.vue'
  import HeaderTop from './components/HeaderTop.vue'
  import TheSidebar from './components/TheSidebar.vue'

  export default {
    name: 'App',
    components: {
    HeaderTop,
    TheTest,
    TheSidebar
},

  data() {
    return {
      user: '',
      pw: '',

      curtidas: 0,
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
    },

    dateBuilder(){
      var d = new Date()

      let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
      let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira",
      "Sábado"]

      let dia = dias[d.getDay()]
      let data = d.getDate()
      let mes = meses[d.getMonth()]
      let ano = d.getFullYear()

      return `${dia}, dia ${data} de ${mes} de ${ano}`
    }
  }
}
</script>

<style>
  #app {
    display: flex;
    font-family: 'montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff4f7;
  }

  html,body {
    margin:0;
    padding:0;
    overflow-x:hidden;
}

  section{
    padding: 10px;
    margin-top: 10px;
    margin-right: 25%;
    background: rgb(99,7,38);
    background: linear-gradient(-90deg, rgba(99,7,38,1) 0%, rgb(70, 7, 28) 100%);

    border-radius: 0 25px 25px 0;
    min-height: 10vw;
  }
  
  .form-area{
    padding:20px;
    margin-left: 80px;
    margin-right: 80px;

    background-color: #fff4f7;
    color: black;
    border-radius: 20px;
  }

  .inner-form{
    margin: 10px;

    width: 100%;
    max-width: 400px;
    height: auto;
  }

  .form{
    display: inline-block;
  }

  .form input{
    width: 20vw;

    background-color: rgb(141, 141, 141);
    border: none;
    box-shadow: 2px 4px #20122c;
  }

  .btn-form button{
    cursor: pointer;
    margin-top: 20px;

    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    
    border:none;
    color: #fff4f7;
    font-size: medium;
    box-shadow: 2px 4px rgba(0,0,0, 0.15);
    font-weight: 700;
    border-radius: 10px;
  }

  .btn-green{
    background-color: #35805b;
  }

  .btn-green:hover{
    transition: 0.4s;
    background-color: #175033;
  }

  .btn-red{
    background-color: #dd3e3e;
  }

  .btn-red:hover{
    transition: 0.4s;
    background-color: #9b2929;
  }

  .btn-form button:first-child{
    margin-right: 10px;
  }

  label{
    text-align: left;
    font-weight: 700;
  }


  .ranking-list{
    justify-content: center;
  }

  .ranking-item{
    display: inline-block;
    text-align: left;
    padding-bottom: 10px;
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

  @media screen and (max-width: 979px) {
    section{
    padding: 10px;
    margin-top: 10px;
    margin-left: 15%;
    margin-right: 15%;
    background-color: #630726;
    }

    .form-area{
    display: block;

    background-color: #fff4f7;
    color: black;
    border-radius: 20px;
    }
    .inner-form{
    
    margin: 10px;
    align-content: center;
  }
  }
  

</style>
