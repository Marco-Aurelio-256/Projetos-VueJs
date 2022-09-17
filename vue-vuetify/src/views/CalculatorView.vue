<template>

  <p class="text-h1 font-weight-bold text-white">
    A Calculadora
  </p>
  <v-container class="w-50">
    <v-form class="mt-2 px-6 py-4 rounded-xl bg-grey">

      <v-container class="bg-result mt-6 text-green text-h5">
        <v-container class="text-subtitle-2">
          {{conta}}
        </v-container>

        <v-container>
          {{result}}
        </v-container>
      </v-container>

        <v-container class="px-6 py-8">
          <v-row>
            <v-col>
              <v-text-field
              label="Primeiro valor"
              v-model="n1"
              type="number">
              </v-text-field>
            </v-col>

            <v-col>
              <v-text-field
              label="Segundo valor"
              v-model="n2"
              type="number">
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
            <v-btn
              class="mr-4 color-btn font-weight-bold"
              @click="realizarOperacao('+')"
              >
              +
            </v-btn>

            <v-btn
            class="mr-4 color-btn font-weight-bold"
              @click="realizarOperacao('-')"
              >
              -
            </v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
            <v-btn
              class="mr-4 color-btn font-weight-bold"
              @click="realizarOperacao('*')"
              >
              *
            </v-btn>

            <v-btn
            class="mr-4 color-btn font-weight-bold"
              @click="realizarOperacao('/')"
              >
              /
            </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
  </v-container>

  <v-container class="w-50">
    <v-btn 
    prepend-icon="mdi-arrow-left"
    @click="voltarLogin()">
      Voltar para login
    </v-btn>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue'
import { onBeforeMount } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    
    setup() {
        const store = useStore()
        const router = useRouter()

        const n1 = ref()
        const n2 = ref()
        const conta = ref('E sua operação aqui!')
        const result = ref('Seu resultado aparecerá aqui!')

        const somar = computed(() => {
          return n1.value + n2.value;
        });

        const subtrair = computed(() => {
          return n1.value - n2.value;        
        });

        const multiplicar = computed(() => {
            return n1.value * n2.value;
        });

        const dividir = computed(() => {
            return n1.value / n2.value;
        });

        const realizarOperacao = ((operacao) =>{
          if(n1.value == undefined || n1.value == ""){
            n1.value = 0
          }

          if(n2.value == undefined || n2.value == ""){
            n2.value = 0
          }

          switch(operacao){
            case '+':
              result.value = somar.value
              conta.value = `${n1.value} + ${n2.value}`
            break;

            case '-':
              result.value = subtrair.value
              conta.value = `${n1.value} - ${n2.value}`
            break;

            case '*':
              result.value = multiplicar.value
              conta.value = `${n1.value} * ${n2.value}`
            break;

            case '/':
              if(n2.value == 0){
                result.value = 'Indefinido'
              }else{
                result.value = dividir.value
              }
              conta.value = `${n1.value} / ${n2.value}`
            break;
          }
        })

        const voltarLogin = (() =>{
          router.push('/login')
        })

        onBeforeMount(() => {
            //Volta para a tela de login, caso o login não tenha sido feito
            if(!store.state.userValid)
            router.push('/login')
        })

        return{
          n1,
          n2,
          conta,
          result,
          somar,
          subtrair,
          multiplicar,
          dividir,
          realizarOperacao,
          voltarLogin
        }
    }

}
</script>

<style scoped>
.color-btn{
  background-color:rgb(43, 43, 43);
  color: white;
}

.bg-result{
  background-color:rgb(43, 43, 43);
}
</style>