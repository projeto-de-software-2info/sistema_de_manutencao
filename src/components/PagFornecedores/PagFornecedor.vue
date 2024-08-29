<script setup>
    import DefaultHeader from '../Paginas/header/DefaultHeader.vue'
    import FiltroFornecedor from './filtro/FiltroFornecedor.vue';
    import InfoFornecedor from './fornecedor/InfoFornecedor.vue';
</script>
<template>
   <main>
        <DefaultHeader titulo="Fornecedores" />
        <FiltroFornecedor />
        <InfoFornecedor />
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