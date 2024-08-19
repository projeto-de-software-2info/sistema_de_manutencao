<script setup>
import LoginInput from './input/LoginInput.vue'
import EnviarButton from './button/EnviarButton.vue'
import { reactive } from 'vue'
import router from '@/router'

const usuario = reactive({
  email: '',
  senha: '',
  adm: ''
})

function logar() {
  if (usuario.adm == true) {
    router.push('/home')
  } else {
    router.push('/paginaInicialCliente')
  }
}
</script>
<template>
  <form @submit.prevent="logar()" validate>
    <div class="content-input">
      <div class="icon">@</div>
      <LoginInput type="email" placeholder="email" v-model="usuario.email" :required="true" />
    </div>
    <div class="content-input">
      <div class="icon"><img src="../../../../public/cadeado.svg" alt="" /></div>
      <LoginInput type="password" placeholder="senha" v-model="usuario.senha" :required="true" />
    </div>
    <small>esqueceu sua senha?</small>
    <div class="input-checkbox">
      <LoginInput type="checkbox" v-model="usuario.adm" :required="false" />administrador
    </div>
    <EnviarButton titulo="Entrar" />
  </form>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  font-family: "Poppins", sans-serif;
}
.content-input {
  display: flex;
  position: relative;
}

.icon {
  position: absolute;
  margin: 5px 15px;
  user-select: none;
}

.icon img {
  width: 18px;
  margin: 5px 0;
}

.input-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  margin: 10px 0 10px 0;
  font-weight: bold;
}

small {
  width: 100%;
  display: flex;
  justify-content: end;
  font-size: 10px;
  cursor: pointer;
  font-weight: bold;
}
</style>
