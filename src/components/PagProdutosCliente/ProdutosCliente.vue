<script setup>
   import DefaultHeader from './titulo/DefaultHeader.vue';
   import DefaultFiltro from './filtro/DefaultFiltro.vue';
   import ProdutosVenda from './produtos/ProdutosVenda.vue';
</script>
<template>
    <main>
        <DefaultHeader />
        <DefaultFiltro />  
        <ProdutosVenda /> 
    </main>
</template>
<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
    margin-left: 10px;
    }
</style>