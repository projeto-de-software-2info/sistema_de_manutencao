<script setup>
import Navbar from '../Navbar/DefaultNavbar.vue'
</script>
<template>
  <div id="div">
    <Navbar/>
    <div class="main">
      <div class="containers">
        <div class="container">
          <span class="number">146</span><span class="tipo">orçamentos</span>
        </div>
        <div class="container">
          <span class="number">134</span><span class="tipo">serviços</span>
        </div>
        <div class="container">
          <span class="number">134</span><span class="tipo">clientes</span>
        </div>
        <div class="container">
          <span class="number">36</span><span class="tipo">fornecedores</span>
        </div>
      </div>
      <div class="containers">
        <div class="clientes">
          <span class="titulo-principal">PRINCIPAIS CLIENTES</span>
          <div class="cliente">
            <img class="icon" src="@/assets/imagens/cliente.png" />
            <span>rafaelabarbieri@gmail.com</span>
            <span>...</span>
          </div>
          <div class="cliente">
            <img class="icon" src="@/assets/imagens/cliente.png" />
            <span>rafaelabarbieri@gmail.com</span>
            <span>...</span>
          </div>
          <div class="cliente">
            <img class="icon" src="@/assets/imagens/cliente.png" />
            <span>rafaelabarbieri@gmail.com</span>
            <span>...</span>
          </div>
          <div class="cliente">
            <img class="icon" src="@/assets/imagens/cliente.png" />
            <span>rafaelabarbieri@gmail.com</span>
            <span>...</span>
          </div>
          <div class="cliente">
            <img class="icon" src="@/assets/imagens/cliente.png" />
            <span>rafaelabarbieri@gmail.com</span>
            <span>...</span>
          </div>
        </div>
        <div class="graficos">
          <img class="grafico" src="@/assets/imagens/faturamento-total.png" />
          <div class="alinhar-fim">
          <img class="grafico" src="@/assets/imagens/entrada-e-saida.png" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#div {
  display: flex;
  background-color: #F5F5F5;
}
.main {
    min-height: 100vh;
    margin-left: 20vw;
    padding: 1vw 10vw;
    max-width: 100vw;
}
.icon {
  width: 20px;
}
.grafico, .graficos {
  width: 28vw;
}
.grafico{
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.graficos{
    display: flex;
    flex-direction: column;
    height: 480px;
    align-content: end
}
.alinhar-fim{
    display: flex;
    flex-direction: column;
    height: 460px;
    align-content: end;
    flex-flow: column-reverse;
}
.container {
  width: 12vw;
  height: 130px;
  background-color: #385C7D;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.number {
  font-weight: bold;
  color: white;
  font-size: 40px;
}

.tipo {
  font-weight: bold;
  color: white;
  font-size: 20px;
}

.clientes {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #DEDEDE;
  background-color: rgb(255, 255, 255);
  height: 480px;
  width: 28vw;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.cliente {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #c8c8c84f;
  height: 50px;
  width: 90%;
  border-radius: 10px;
  margin: 11px 0px;
}

.cliente span{
    font-weight: 600;
}
.titulo-principal {
  font-weight: 700;
  color: #012340;
  font-size: 20px;
  margin: 17px;
}
.flex {
  display: flex;
  justify-content: space-evenly;
  width: 74vw;
}
.containers {
  display: flex;
  justify-content: space-between;
  width: 60vw;
  margin: 30px 0px;
}
</style>
