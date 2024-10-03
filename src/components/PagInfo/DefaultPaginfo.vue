<script setup>
        import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
        import PaginaFiltro from '../Paginas/Filtros/PaginaFiltro.vue'
        import DefaultInfoCliente from './cliente/DefaultInfoCliente.vue';
</script>

<template>
    <main>
       <DefaultHeader titulo="Serviços"/>
        <PaginaFiltro/> 
        <DefaultInfoCliente />
    </main>
</template>

<style scoped>
   main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
    margin-left: 10px;
    height: 100vh;
    }
</style>