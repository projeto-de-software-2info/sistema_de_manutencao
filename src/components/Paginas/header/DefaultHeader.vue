<script setup>
    import AddButton from './AddButton/AddButton.vue';
    import BarraPesquisa from './barraPesquisa/BarraPesquisa.vue';
    
    defineProps({
        titulo: String
    })
</script>
<template>
    <div class="header">
        <p>{{ titulo }}</p>
        <div class="container">
        <BarraPesquisa />
        <AddButton />
        </div>
    </div>
</template>
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(200, 200, 200, 0.18);
        padding: 3%;
        margin: 7.338vh 6.25vw 0 26vw;
        border-radius: 10px;
        width: 66vw;
        height: 14.4vh;
    }
   
    p {
        font-size: 6vh;
        color: rgba(56, 92, 125, 1);
        font-weight: 800;
        padding:  0;
    }
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25vw;

    }
</style>