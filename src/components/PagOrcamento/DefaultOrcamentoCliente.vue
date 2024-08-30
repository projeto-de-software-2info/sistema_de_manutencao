<script setup>
import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
import PaginaFiltro from '../Paginas/Filtros/PaginaFiltro.vue'
import InfoVisaoCliente from './cliente/InfoVisaoCliente.vue'
</script>

<template>
  <main>
    <DefaultHeader titulo="Orçamento" />
    <PaginaFiltro />
    <InfoVisaoCliente />
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
