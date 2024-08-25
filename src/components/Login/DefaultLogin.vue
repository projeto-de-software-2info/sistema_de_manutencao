<script setup>
import LoginLogo from './logo/LoginLogo.vue'
import DefaultForm from '../Form/DefaultForm.vue'
import { ref } from 'vue'
import router from '@/router'

const dados = ref({
  email: '',
  senha: '',
  adm: ''
})

const fields = [
  {
    type: 'email',
    placeholder: 'email',
    value: 'email',
    required: 'true'
  },
  {
    type: 'password',
    placeholder: 'senha',
    value: 'senha',
    required: 'true'
  },
  {
    type: 'checkbox',
    value: 'adm',
    nome: 'administrador'
  }
]

function salvar(info) {
  dados.value = info
  if (dados.value.adm == true) {
    router.push('/home')
  } else {
    router.push('/oii')
  }
}
</script>
<template>
  <main>
    <section class="login-logo">
      <LoginLogo />
    </section>
    <section class="login-form">
      <DefaultForm :fields="fields" @enviar="salvar" :dados="dados" titulo="Login" />
    </section>
  </main>
</template>
<style scoped>
* {
  font-weight: bold;
  color: #012340;
}

main {
  display: flex;
  width: 100vw;
  height: 100vh;
}

main section {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  background-color: #012340;
}

.login-logo {
  background-color: white;
}
</style>
