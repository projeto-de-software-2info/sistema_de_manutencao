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
    router.push('/paginaInicial')
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
