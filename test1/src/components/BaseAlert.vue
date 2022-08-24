<template>
  <div :class="baseClass">
    <slot/>
    <button @click="onClick()">
      X
    </button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
  },

  computed: {
    baseClass(){
      return [
        'alert',
        this.variant ? `alert-${this.variant}` : ''
      ]
    }
  },

  methods: {
    onClick(){
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.alert{
  display: flex;
  justify-content: space-between;

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