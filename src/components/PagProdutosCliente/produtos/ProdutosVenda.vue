<script setup>
</script>
<template>
    <div class="produtos">
        <div class="container">
            <div class="produto">
                <div class="imgProduto">    
                    <img src="C:\Users\guilh\OneDrive\Documentos\sistema_de_manutencao\src\assets\imagens\capinhaIphone.png" alt="produto4" />
                </div>
                <div class="nome-preco">
                   <p class="nome">Capinha Azul para Iphone XR</p>
                   <p class="preco">R$ 40,00</p>
                </div>
                <div class="quantidade">
                    <button><p>-</p></button>
                    <p>1</p>
                    <button><p>+</p></button>
                </div>
                <button class="comprar">comprar</button>
            </div>
            <div class="produto">
                <div class="imgProduto">    
                    <img src="C:\Users\guilh\OneDrive\Documentos\sistema_de_manutencao\src\assets\imagens\bateriaIphone.png" alt="produto4" />
                </div>
               <div class="nome-preco">
                   <p class="nome">Bateria Iphone 11</p>
                   <p class="preco">R$ 40,00</p>
                </div>
                <div class="quantidade">
                    <button><p>-</p></button>
                    <p>1</p>
                    <button><p>+</p></button>
                </div>
                <button class="comprar">comprar</button>
            </div>
            <div class="produto">
                <div class="imgProduto">    
                    <img src="C:\Users\guilh\OneDrive\Documentos\sistema_de_manutencao\src\assets\imagens\pelicula.png" alt="produto4" />
                </div>
                <div class="nome-preco">
                   <p class="nome">Película para A53</p>
                   <p class="preco">R$ 40,00</p>
                </div>
                <div class="quantidade">
                    <button><p>-</p></button>
                    <p>1</p>
                    <button><p>+</p></button>
                </div>
                <button class="comprar">comprar</button>
            </div>
            <div class="produto">
                <div class="imgProduto">    
                    <img class="conector" src="C:\Users\guilh\OneDrive\Documentos\sistema_de_manutencao\src\assets\imagens\placaConector.png" alt="produto4" />
                </div>
               <div class="nome-preco">
                   <p class="nome">Placa Conector para Galaxy A03s</p>
                   <p class="preco">R$ 40,00</p>
                </div>
                <div class="quantidade">
                    <button><p>-</p></button>
                    <p>1</p>
                    <button><p>+</p></button>
                </div>
                <button class="comprar">comprar</button>
            </div>
        </div>
    </div>

</template>
<style scoped>
    .produtos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0vh 0 0 20vw;
        height: 67.69vh;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 66vw;
        margin: 0 0 0 0;
    }
    .produto {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(200, 200, 200, 0.18);
        border-radius: 10px;
        width: 15vw;
        height: 55vh;
        margin: 0 0 0 0;
        box-shadow: 4px 4px 3.9px 0px rgba(183, 183, 183, 0.25);
        border: 2px solid rgba(217, 217, 217, 1)
    }
    .imgProduto {
        display: flex;
        justify-content: center;
        margin: 0 0 0 0;
        height: 25vh;
        width: 20vw;
    }
    img {
        width: 250px;
        height: 125px;
        margin: 1vh;
        padding: 2px;
    }
    .conector {
        width: 13vw;
        height: 20vh;
        margin: 0 0 0 0;
    }
    .nome-preco {
        
        margin: 0 0 0 0;
    }
    .nome {
        font-size: 2.5vh;
        color: rgba(56, 92, 125, 1);
        font-family: "Poppins", sans-serif;
        margin: 0 0 0 0;
    }
    .preco {
        font-size: 2.5vh;
        color: rgba(56, 92, 125, 1);
        font-family: "Poppins", sans-serif;
        margin: 0 0 0 0;
    }
    .quantidade{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 0 0;

    }
    button {
        background-color: rgba(200, 200, 200, 0.18);
        border: none;
        border-radius: 10px;
        margin: 0 0 0 0;
    }
    p {
        font-size: 2.5vh;
        color: rgba(56, 92, 125, 1);
        font-family: "Poppins", sans-serif;
        margin: 0 0 0 0;
    }
    .comprar {
        font-size: 2.5vh;
        color: rgba(56, 92, 125, 1);
        font-family: "Poppins", sans-serif;
        margin: 0 0
    }
</style>