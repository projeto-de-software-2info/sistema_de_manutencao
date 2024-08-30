<script setup>
import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
import PaginaFiltro from '../Paginas/Filtros/PaginaFiltro.vue'
import DefaultVendas from './vendas/DefaultVendas.vue'
</script>

<template>
  <main>
    <DefaultHeader titulo="Vendas" />
    <PaginaFiltro />
    <DefaultVendas />
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
