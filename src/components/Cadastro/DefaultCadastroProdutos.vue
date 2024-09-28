<script setup>
import ButtonForm from "../Form/button/ButtonForm.vue";
import router from "@/router";
</script>
<template>
  <div class="sair" @click="router.back()">X</div>
  <main>
    <section class="login-form">
      <RouterLink class="router-link" to="/cadastro/pecas">
        <ButtonForm titulo="Cadastrar Peça" />
      </RouterLink>
      <RouterLink class="router-link" to="/cadastro/acessorios">
        <ButtonForm titulo="Cadastrar Acessório" />
      </RouterLink>
    </section>
  </main>
</template>
<style scoped>
.sair {
  font-size: 20px;
  color: #012340;
  position: absolute;
  top: 50px;
  right: 35px;
  cursor: pointer;
}
.router-link {
  width: 20vw;
  margin: 20px;
}
* {
  font-weight: bold;
  color: #ffffff;
}

main {
  display: flex;
  align-items: end;
  justify-content: end;
  height: 90vh;
  margin-left: 20vw;
}

main section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login-form {
  height: 90vh;
}
.login-logo {
  background-color: white;
}
</style>
