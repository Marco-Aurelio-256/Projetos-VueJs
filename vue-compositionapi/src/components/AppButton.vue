<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            variant: {
                type: String,
                default: 'yay'
            },
                
        },

        setup(props, ctx) {

        }
    }

</script>

<style scoped>

</style>