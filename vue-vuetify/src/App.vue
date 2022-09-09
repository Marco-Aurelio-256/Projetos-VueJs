<template>
  <router-view/>
</template>

<script>
 import { onBeforeMount } from '@vue/runtime-core'
  import { useStore } from 'vuex'
  //import { useRoute } from 'vue-router'
  import { useRouter } from 'vue-router'

  export default {
    setup(){
      const store = useStore()
      const router = useRouter()

      //Volta para a tela de login, caso o login não tenha sido feito
      onBeforeMount(() => {
        if(!store.state.userValid)
          router.push('/login')
        else router.push('/calculator')
      })
  }
}
</script>

<style>

</style>