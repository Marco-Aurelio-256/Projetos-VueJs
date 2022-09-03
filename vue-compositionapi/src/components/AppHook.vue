<template>
    <div>
        Hook
    </div>
  
</template>

<script>
import { onBeforeMount, onMounted } from '@vue/runtime-core'
export default {
    setup() {
        onBeforeMount( () => {
            console.log('onBeforeMount')

        }),

        onMounted(() => {
            console.log('onMounted')
        })

    }

}
</script>

<style>

</style>