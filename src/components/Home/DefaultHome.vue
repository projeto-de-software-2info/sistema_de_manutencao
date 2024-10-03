<script setup>
import ContainerInformations from './Container/ContainerInformations.vue'
import ContainerCliente from './Container/ContainerCliente.vue'
import HomeGraphs from './grafico/HomeGraphs.vue'
import GraficoFaturamento from '@/assets/imagens/faturamento-total.png'
import GraficoEntradaSaida from '@/assets/imagens/entrada-e-saida.png'
</script>
<template>
  <div id="div">
    <div class="main">
      <div class="containers">
        <ContainerInformations number="146" type="orçamentos" />
        <ContainerInformations number="134" type="serviços" />
        <ContainerInformations number="134" type="clientes" />
        <ContainerInformations number="36" type="fornecedores" />
      </div>
      <div class="containers dados">
        <div class="clientes">
          <span class="titulo-principal">PRINCIPAIS CLIENTES</span>
          <ContainerCliente email="rafaelabarbieri@gmail.com" information="..." />
          <ContainerCliente email="rafaelabarbieri@gmail.com" information="..." />
          <ContainerCliente email="rafaelabarbieri@gmail.com" information="..." />
          <ContainerCliente email="rafaelabarbieri@gmail.com" information="..." />
          <ContainerCliente email="rafaelabarbieri@gmail.com" information="..." />
          <ContainerCliente email="rafaelabarbieri@gmail.com" information="..." />
          <ContainerCliente email="rafaelabarbieri@gmail.com" information="..." />
        </div>
        <div class="graficos">
          <HomeGraphs :image="GraficoFaturamento" />
          <div class="alinhar-fim">
            <HomeGraphs :image="GraficoEntradaSaida" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#div {
  display: flex;
  background-color: #f5f5f5;
}
.main {
  min-height: 100vh;
  margin-left: 20vw;
  padding: 1vw 10vw;
  max-width: 100vw;
}
.graficos {
  width: 28vw;
}
.graficos {
  display: flex;
  flex-direction: column;
  height: 480px;
  align-content: end;
}
.alinhar-fim {
  display: flex;
  flex-direction: column;
  height: 460px;
  align-content: end;
  flex-flow: column-reverse;
}
.clientes {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #dedede;
  background-color: rgb(255, 255, 255);
  height: 480px;
  width: 28vw;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
@media (width >= 1650px) {
  .titulo-principal{
    margin-top:60px ;
  }
  .clientes{
    height: 650px;
  }
  .dados {
    height: 650px;
  }
  .graficos {
    height: 650px;
  }
}
</style>
