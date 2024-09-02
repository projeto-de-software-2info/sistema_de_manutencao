<script setup>
import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
import DefaultClientes from './clientes/DefaultClientes.vue'
import PaginaFiltro from '../Paginas/Filtros/PaginaFiltro.vue'


</script>
<template>
  <main>
   <DefaultHeader titulo="Clientes"/>
   <PaginaFiltro/>
    <DefaultClientes />
  </main>
</template>
<style scoped>
 main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
 
    }
</style>
