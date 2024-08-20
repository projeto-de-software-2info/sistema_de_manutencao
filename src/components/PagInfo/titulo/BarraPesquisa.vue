<script setup>
</script>
<template>
    <div class="search">
        <img src="@/assets/imagens/lupa.png" alt="">
        <input type="text" placeholder="pesquisar...">
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
input {
    height: 4.6vh;
    width: 22vw;
    background-color: rgba(255, 255, 255, 0.75);
    border: none;
    border-radius: 10px;
    font-size: 2.5vh;
    padding-left: 4.5vh;
    font-family: "Poppins", sans-serif;
}
::-webkit-input-placeholder {
   color: rgba(56, 92, 125, 1);
   font-family: "Poppins", sans-serif;
}

:-moz-placeholder {
   color: rgba(56, 92, 125, 1);
   font-family: "Poppins", sans-serif;
}

::-moz-placeholder {
   color: rgba(56, 92, 125, 1);
   font-family: "Poppins", sans-serif;
}

:-ms-input-placeholder {  
   color: rgba(56, 92, 125, 1);
   font-family: "Poppins", sans-serif;
}
.search img{ 
   position: absolute;
   padding-left: 1.5vh;
}
.search{
    width: 100%;
    display: flex;
    align-items: center;
}
</style>