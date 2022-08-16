<template>
    <div class="sidebar">
        <h3>Menu</h3>
        <div class="menu">
            <a href="#" class="menu-item">Início</a>
            <a href="#" class="menu-item">Sobre Nós</a>
            <a href="#" class="menu-item">Contato</a>
            <a href="#" class="menu-item">Doação</a>
            <a href="#" class="menu-item">???</a>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'sidebar-menu',

        data: () => ({
        }),

        components: {
        }
    }

</script>

<style scoped>
    .sidebar{
        padding-top: 60px;
        flex: 1 1 0;
        max-width: 300;
        background-color: #1a061d;
    }

    .sidebar h3{
        font-size: medium;
    }

    @media screen and (max-width: 979px) {
        .sidebar{
            display:none;
        }
    }

</style>