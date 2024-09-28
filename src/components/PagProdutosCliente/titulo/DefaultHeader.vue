<script setup>
    import BarraPesquisa from './BarraPesquisa.vue';
</script>
<template>
    <main>
        <div class="carrinho">
            <img src="@\assets\imagens\carrinho.png" alt="carrinho" />
        </div>
            <div class="header">
                <p>Produtos</p>
                <div class="container">
                    <BarraPesquisa />
                </div>
            </div>
    </main>
</template>
<style scoped>
main{
    margin-top: 2vh;
}
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(200, 200, 200, 0.18);
        padding: 3%;
        margin: 2vh 6.25vw 0 26vw;
        border-radius: 10px;
        width: 66vw;
        height: 14.4vh;
        
    }
   
    p {
        font-size: 6vh;
        color: rgba(56, 92, 125, 1);
        font-weight: 800;
        padding:  0;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25vw;
    }
    .carrinho {
        margin: 0 0 0 20vw;
        padding: 0;
        width: 66vw;
        display: flex;
        justify-content: right;       
    }
    img {
        width: 7vh;
        height: 7vh;
        padding: 5px;
        border: 2px solid rgba(56, 92, 125, 1) ;
        border-radius: 50%;  
    }   
</style>