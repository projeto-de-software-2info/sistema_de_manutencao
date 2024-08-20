<script setup>
        import DefaultHeader from './titulo/DefaultHeader.vue';
        import DefaultFiltro from './filtro/DefaultFiltro.vue';
</script>

<template>
    <main>
        <DefaultHeader />
        <DefaultFiltro /> 
    </main>
</template>

<style scoped>
   main {
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: rgba(243, 243, 243, 1);
    margin-left: 20vw;
    }
</style>