<script setup></script>
<template>
  <div class="produtos">
    <div class="container">
      <div class="produto">
        <div class="imgProduto">
          <img
            src="C:\Users\guilh\OneDrive\Documentos\sistema_de_manutencao\src\assets\imagens\capinhaIphone.png"
            alt="produto4"
          />
        </div>
        <div class="nome-preco">
          <p class="nome">Capinha Azul para Iphone XR</p>
          <p class="preco">R$ 40,00</p>
        </div>
        <div class="quant-comprar">
            <div class="quantidade">
        <button>
          <p>-</p>
        </button>
        <p>1</p>
        <button>
          <p>+</p>
        </button>
    </div>
          <button class="comprar">comprar</button>
    </div>
      </div>
      <div class="produto">
        <div class="imgProduto">
          <img
            src="C:\Users\guilh\OneDrive\Documentos\sistema_de_manutencao\src\assets\imagens\bateriaIphone.png"
            alt="produto4"
          />
        </div>
        <div class="nome-preco">
          <p class="nome">Bateria Iphone 11</p>
          <p class="preco">R$ 40,00</p>
        </div>
        <div class="quant-comprar">
            <div class="quantidade">
        <button>
          <p>-</p>
        </button>
        <p>1</p>
        <button>
          <p>+</p>
        </button>
    </div>
          <button class="comprar">comprar</button>
    </div>
      </div>
      <div class="produto">
        <div class="imgProduto">
          <img
            src="C:\Users\guilh\OneDrive\Documentos\sistema_de_manutencao\src\assets\imagens\pelicula.png"
            alt="produto4"
          />
        </div>
        <div class="nome-preco">
          <p class="nome">Película para A53</p>
          <p class="preco">R$ 40,00</p>
        </div>
        <div class="quant-comprar">
            <div class="quantidade">
        <button>
          <p>-</p>
        </button>
        <p>1</p>
        <button>
          <p>+</p>
        </button>
    </div>
          <button class="comprar">comprar</button>
    </div>
      </div>
      <div class="produto">
        <div class="imgProduto">
          <img
            class="conector"
            src="C:\Users\guilh\OneDrive\Documentos\sistema_de_manutencao\src\assets\imagens\placaConector.png"
            alt="produto4"
          />
        </div>
        <div class="nome-preco">
          <p class="nome">Placa Conector para Galaxy A03s</p>
          <p class="preco">R$ 40,00</p>
        </div>
        <div class="quant-comprar">
            <div class="quantidade">
        <button>
          <p>-</p>
        </button>
        <p>1</p>
        <button>
          <p>+</p>
        </button>
    </div>
          <button class="comprar">comprar</button>
    </div>
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
  background-color: rgba(255, 255, 255, 0.22);
  border-radius: 10px;
  width: 15vw;
  height: 55vh;
  margin: 0 0 0 0;
  box-shadow: 4px 4px 3.9px 0px rgba(183, 183, 183, 0.25);
  border: 2px solid rgba(217, 217, 217, 1);
}

.imgProduto {
  display: flex;
  justify-content: center;
  margin: 0 0 0 0;
  height: 25vh;
  width: 20vw;
}

img {
  width: 170px;
  height: 170px;
  margin: 1vh;
  padding: 2px;
}

.conector {
  width: 170px;
  height: 170px; 
  margin: 0 0 0 0;
}

.nome-preco {
  height: 15vh;
  width: 90%;
  margin: 0 0 0 0;
  justify-content: center;
  align-items: center;
}

.nome {
  font-size: 17px;
  color: rgba(63, 63, 63, 1);
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin: 0 0 0 2vw;
  padding: 5px;
  display: flex;
  align-items: center;
  text-align:left
}

.preco {
  font-size: 2.5vh;
  color: rgba(1, 35, 64, 1);
  font-family: 'Poppins', sans-serif;
  margin: 0 0 0 2.29vw;
  font-weight: 600;
}
.quant-comprar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2vh 0 0 0;
    padding: 5px;
}

.quantidade {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 0 0 0;
  width: 4vw;
  height: 5.5vh;
  border-radius: 15px;
  border: 2px solid rgba(63, 63, 63, 1);
}
.quantidade p{
    color: rgba(63, 63, 63, 1);
    font-weight: 600;
}

button {
  border-radius: 10px;
  border: none;
  font-weight: bold;
  background-color: none;
  background-color:  rgba(255, 255, 255, 0.22);

}

p {
  font-size: 16px;
  color: rgba(56, 92, 125, 1);
  font-family: 'Poppins', sans-serif;
  margin: 0 0 0 0;
} 
button p {
    font-size: 15px;
    color: rgba(63, 63, 63, 1);
    font-family: 'Poppins', sans-serif;
    margin: 0 0 0 0;
}
.comprar {
  font-size: 14px;
  color: rgb(253, 253, 253);
  background-color: rgba(1, 35, 64, 1);
  font-family: 'Poppins', sans-serif;
  margin: 0 0 0 0.5vw;
  font-weight: 600;
  padding: 8px 15px;
  width: 7vw;
  border-radius: 14px;
}
</style>
