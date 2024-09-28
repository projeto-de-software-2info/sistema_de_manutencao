<script setup></script>

<template>
  <main>
    <div class="main">
      <div class="title">
        <h1 style="color: #012340">O seu dispositivo</h1>
        <h1 style="color: #385c7d">merece sempre</h1>
        <h1 style="color: #012340">o melhor</h1>
        <hr style="width: 9vw; margin-left: 2vw; border-color: #012340" />
        <div class="slogan">
          <h2 style="color: #012340">Cuide do seu celular com a nossa</h2>
          <h2 style="color: #012340">manutenção rápida e eficiente</h2>
        </div>
        <div class="infoFoto">
          <div class="info-1">
            <h1 class="margin-num" style="color: #385c7d">13</h1>
            <h2 class="margin-text" style="color: #385c7d">fornecedores</h2>
          </div>
          <div class="info">
            <h1 class="margin-num" style="color: #385c7d">48</h1>
            <h2 class="margin-text" style="color: #385c7d">produtos</h2>
          </div>
          <div class="info">
            <h1 class="margin-num" style="color: #385c7d">+100</h1>
            <h2 class="margin-text" style="color: #385c7d">serviços realizados</h2>
          </div>
        </div>
      </div>

      <div>
        <img class="imagem" src="./imagem/imagemCelular.png" alt="" />
      </div>
    </div>
    <div class="blocos">
      <div class="bloc">
        <img class="img" src="@/assets/imagens/phone-case (1).png" alt="" width="80px" />
        <span>capinhas</span>
      </div>
      <div class="bloc">
        <img class="img" src="@/assets/imagens/phone.png" alt="" width="80px" />
        <span>peliculas</span>
      </div>
      <div class="bloc">
        <img class="img" src="@/assets/imagens/movel.png" alt="" width="80px" />
        <span>peças</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
span {
  color: white;
  padding-top: 8px;
  font-size: 16px;
  font-weight: bold;
}
.blocos {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25vw;
  width: 70vw;
  margin-top: 30px;
}
.bloc {
  width: 170px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #012340;
  border-radius: 10px;
  margin: 50px;
}
main {
  background-color: #f3f3f3;
  height: 100vh;
}

.title {
  padding-top: 3vw;
  line-height: 3.5vw;
}

.title h1 {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 3vw;
}

.slogan {
  margin-top: 1vw;
  line-height: 2vw;
}

.slogan h2 {
  font-size: 1.5vw;
  font-weight: 700;
}

.infoFoto {
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 0;
  width: 45vw;
  margin-top: 2vw;
}

.info {
  margin-left: 100px;
}

.main {
  margin-left: 25vw;
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 60vw;
}

.imagem {
  width: 20vw;
  margin-top: 3vw;
}

.margin-num {
  text-align: center;
}

.margin-text {
  font-weight: 700;
  line-height: 1vw;
}
</style>
