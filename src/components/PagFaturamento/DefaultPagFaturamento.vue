<script setup>
import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
import PaginaFiltro from '../Paginas/Filtros/PaginaFiltro.vue'
import DefaultFaturamentos from './faturamentos/DefaultFaturamentos.vue'

</script>

<template>
  <main>
    <DefaultHeader titulo="Faturamento" />
    <PaginaFiltro/>
    <DefaultFaturamentos />
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
