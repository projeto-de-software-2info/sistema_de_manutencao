<script setup>
import DefaultForm from '../Form/DefaultForm.vue'
import { ref } from 'vue'
import router from '@/router'

const dados = ref({
  servico: '',
  dataInicial: '',
  dataFinal: ''
})

const fields = [
  {
    type: 'string',
    placeholder: 'conversão em serviço',
    value: 'servico',
    required: 'true'
  },
  {
    type: 'date',
    placeholder: 'data inicial',
    value: 'dataInicial',
    required: 'true'
  },
  {
    type: 'date',
    placeholder: 'data Final',
    value: 'dataFinal',
    required: 'true'
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
    <section class="login-form">
      <DefaultForm :fields="fields" @enviar="salvar" :dados="dados" titulo="Relatório" />
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
  width: 80vw;
  height: 100vh;
  margin-left: 20vw;
}

main section {
  width: 100%;
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
