<template>
  <div :class="baseClass">
    {{ test }}
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
    test: {
      type: String,
      default: 'Testando - ',
    },

  },

  computed: {
    baseClass(){
      return [
        'alert',
        this.variant ? `alert-${this.variant}` : ''
      ]
    }

  }
}
</script>

<style scoped>
.alert{
  padding: 10px;
  color: gray;
  background: #ddd
}

.alert-sucess{
  background: green;
  color: white;
}

.alert-danger{
  background: red;
  color: white;
}


</style>