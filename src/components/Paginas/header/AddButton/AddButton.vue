<script setup>
const rotasComCadastro = ["/clientes", "/orcamentos", "/fornecedores", "/produtos"];
</script>

<template>
  <RouterLink
    v-if="rotasComCadastro.includes($route.fullPath)"
    class="router-link"
    :to="'/cadastro' + $route.fullPath"
  >
    <div class="add">
      <button>+</button>
    </div>
  </RouterLink>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.router-link {
    text-decoration: none;
  }  
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 35px;
  background-color: #385c7d;
  border-radius: 20px;
  position: relative;
}
button {
  font-family: "Poppins", sans-serif;
  font-size: 3.5vh;
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border: none;
  border-radius: 50%;
  position: relative;
}
</style>
