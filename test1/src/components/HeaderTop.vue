<template>
    <header>
        <div class="inner-header">
            <div class="logo-container">
                <div>
                    <a href="#">
                        <img src="../../src/assets/logo.png" alt="Vue logo"/>
                        <h2><span>VUE</span><span style="color: #fff4f7;">.</span>JS</h2>
                    </a>
                </div>  
            </div>

            <div class="user-area">
                <img src="../../src/assets/placeholder_user.png" 
                alt="Foto do usuário"
                class="user-icon">
                <p>Nome</p>

            </div>

            <nav>
                <li><span><a href="#" class="button">Início</a></span></li>
                <li><span><a href="#" class="button">Sobre nós</a></span></li>
                <li><span><a href="#" class="button">Contato</a></span></li>
                <li><span><a href="#" class="button">Doação</a></span></li>
                <li><span><a href="#" class="button">???</a></span></li>

            </nav>
        </div>
    </header>
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

header{
    height: 80px;
    display: block;
    background-color: #1a061d;
    width: 100vw;
    
}

.user-area{
    border-radius: 25px;
    margin-top: 2px;
    padding: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    height: 100%;
    float: right;
    box-shadow: 2px 4px rgba(0,0,0,0.5);
    background-color: #020002;
}

.user-icon{
    height:50px;
    margin-right: 5px;
    border-radius: 50%;
}

.inner-header{
    width: 80%;
    height: 100%;
    display: table;
    float: left;
    margin: 0 auto;
}

.logo-container{
    display: table;
    height: 100%;
    float: left;
}

.logo-container div{
    height: 100%;
    display: table-cell;
    vertical-align: middle;
}

.logo-container div a{
    float:left;
    text-decoration: none;
}

.logo-container h2{
    float:right;
    display: table-cell;
    vertical-align: middle;
    margin-left: 10px;
    font-size: xx-large;
    text-align: center;
    text-decoration: none;
    font-weight:100;
    font-family: 'Mulish', sans-serif;
    
    background: -webkit-linear-gradient(#35495e, #41b883);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.logo-container h2 span{
    font-weight: 700;
}

.logo-container img{
    height: 60px;
    margin-top: 10px;
}

nav{
    height: 100%;
    float: right;
}

nav li{
    display: table-cell;
    height: 100%;
    float: left;

    margin-right: 10px;
    padding-top: 30px;
    border-radius: 20px;
}

nav span{
    display: table-cell;
    vertical-align: middle;
}

nav .button{
    color: #fff4f7;
    text-decoration: none;
    font-size: larger;
    padding: 10px 20px;
    border-radius: 4px;
}

nav a:hover{
    transition: 0.5s;
    background-color: #822050;
}

nav a li:last-of-type{
    margin-right: 0;
}



@media screen and (max-width: 979px) {
    nav{
        display: none;
    }

    .logo-container{
        margin-left: auto;
        float:none;
        margin-right: auto;
        display: table;
    }
}
</style>