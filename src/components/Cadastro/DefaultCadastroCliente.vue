<script setup>
import DefaultForm from '../Form/DefaultForm.vue'
import { ref } from 'vue'
const dados = ref({
    id: 2,
    name: '',
    email: '',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: '5 maio,  2024',
    status: 'ativo'
})

const fields = [
  {
    type: 'string',
    placeholder: 'nome completo',
    value: 'name',
    required: 'true'
  },
  {
    type: 'email',
    placeholder: 'email',
    value: 'email',
    required: 'true'
  },
  {
    type: 'number',
    placeholder: 'cep',
    value: 'cep',
    required: 'true'
  },
  {
    type: 'string',
    placeholder: 'endereço',
    value: 'endereco',
    required: 'true'
  },
  {
    type: 'number',
    placeholder: 'telefone',
    value: 'telefone',
    required: 'true'
  }
]


</script>
<template>
  <main>
    <section class="login-form">
      <DefaultForm :fields="fields"  :dados="dados" titulo="Clientes" />
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
