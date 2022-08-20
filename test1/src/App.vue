<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->

  <TheSidebar/>
  <!--A maneira que o TheTest está implementando é inadequado-->
  <!--Basicamente uma tag h1 glorificada. Não alterarei por agora pois são apenas testes-->
  <main>
    <HeaderTop/>
    <section>
      <h1>Teste de Slots</h1>
      <SlotTest> 
        ISso está funcionando? <br> Meu deus, está! :OOOOOO <br>
        Muito legal né? <br> Sim :D
        
        </SlotTest>
    </section>

    <section>
      <h1>Teste de funções</h1>
      <TheTest question="Que dia é hoje?"></TheTest>
      <h3>{{ dateBuilder() }}</h3>
      <br>
      <TheTest question="É natal?"></TheTest>
      <h1 v-if="dateBuilder().includes('25 Dezembro')" style="color: #5ca058;">Sim</h1>
      <h3 v-else style="color: #a81a4a;">Não</h3>
    </section>

    <section>
      <h1> Teste de Data-binding</h1>
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
        </div>
        <div class="btn-form">
          <button
            class="btn btn-green"
            type="button" onclick="alert('Logado?')"
            >
            Login
          </button>

          <button
            class="btn btn-red"
            type="button" onclick="alert('Campos cancelados')">
            Cancelar
          </button>
      </div>
      <br>

      Usuário: {{user}}<br>
      Senha:  {{pw}}
    </section>

    <section>
      <h1>Teste de eventos (agora com computed)</h1>
      <div>
        {{ likeBuilder }}
      </div>
      <button class="btn btn-green" @click="like()">
      👍 Curtir
      </button>

    </section>

    <section class="ranking-list">
      <h1>Teste de v-for</h1>
      <h1>Rank dos mais legais:</h1>

      <div class="ranking-item">
        <span
          v-for="obj in todos"
          :key="obj.id"
        >
        {{obj.id}}° - {{ obj.title }}<br>

        </span> 
      </div>
    </section>

    <section>
      <div class="ranking-item">
      <h1>Teste de Computed</h1>

      <h3>📝 Afazeres:</h3>
      <div
        v-for="todo in todos"
        :key="todo.id"
      >
        <input 
          type="checkbox"
          v-model="todo.completed"
        >
        {{todo.title}}
        
      </div>

      <h3>Afazeres pendentes:</h3>
      <div v-if="remainingTodos.length == 0">
        <h5 style="color: grey;">Não há afazeres pendentes</h5>
      </div>

      <div v-else
        v-for="todo in remainingTodos"
        :key="todo.id"
      >
      {{todo.title}}
      </div>

      <h3>Afazeres completos:</h3>
      <div v-if="completedTodos.length == 0">
        <h5 style="color: grey;">Não há afazeres completos</h5>
      </div>

      <div v-else
        v-for="todo in completedTodos"
        :key="todo.id"
      >
      {{todo.title}}
      </div>
      </div> 
    </section>

    <section>
      <BaseAlert variant='sucess'>Seu formulário foi enviado com sucesso!</BaseAlert>
      <BaseAlert variant='danger'>Falha ao enviar o seu formulário</BaseAlert>
    </section>
  </main>
</template>

<script>
  import TheTest from './components/TheTest.vue'
  import HeaderTop from './components/HeaderTop.vue'
  import TheSidebar from './components/TheSidebar.vue'
  import SlotTest from './components/SlotTest.vue'
import BaseAlert from './components/BaseAlert.vue'

  export default {
    name: 'App',
    components: {
    HeaderTop,
    TheTest,
    TheSidebar,
    SlotTest,
    BaseAlert
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
              "title": "delectus aut autem",
              "completed": false
            },
            {
              "id": 2,
              "title": "quis ut nam facilis et officia qui",
              "completed": false
            },
            {
              "id": 3,
              "title": "fugiat veniam minus",
              "completed": false
            },
            {
              "id": 4,
              "title": "et porro tempora",
              "completed": true
            }
        ]
      }
    },
  
  computed: {
    likeBuilder(){
      if(this.curtidas == 1){
        return `Este site recebeu ${this.curtidas} curtida`
      } else{
        return `Este site recebeu ${this.curtidas} curtidas`
      }
    },

    remainingTodos(){
      return this.todos.filter(todo => !todo.completed)
    },

    completedTodos(){
      return this.todos.filter(todo => todo.completed)
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
</style>
