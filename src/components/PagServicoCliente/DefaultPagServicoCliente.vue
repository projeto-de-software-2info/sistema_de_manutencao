<script setup>
import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
import PaginaFiltro from '../Paginas/Filtros/PaginaFiltro.vue'
import DefaultServico from './servico/DefaultServico.vue'
</script>

<template>
  <main>
    <DefaultHeader titulo="Serviço" />
    <PaginaFiltro />
    <DefaultServico />
  </main>
</template>

<style scoped>
   main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
    margin-left: 10px;
    height: 100vh;
    }
</style>
