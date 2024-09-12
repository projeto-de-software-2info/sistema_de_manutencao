<script setup>
import DefaultForm from '../Form/DefaultForm.vue'
import { ref } from 'vue'

const dados = ref({
  id: '',
  name: '',
  email: '',
  pecas: '',
  cellphone: '',
  data: '5 maio,  2024',
  status: 'Aprovado'
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
    placeholder: 'email do cliente',
    value: 'email',
    required: 'true'
  },
  {
    type: 'string',
    placeholder: 'modelo do celular',
    value: 'cellphone',
    required: 'true'
  },
  {
    type: 'select',
    placeholder: 'pecas',
    value: 'pecas',
    required: 'true'
  }
]


</script>
<template>
  <main>
    <section class="login-form">
      <DefaultForm :fields="fields" :dados="dados" titulo="Orçamentos" />
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
