<script setup>
import { ref } from 'vue'
import ButtonForm from './button/ButtonForm.vue'
import InputForm from './input/InputForm.vue'
import cadeado from '@/assets/imagens/cadeado.svg'
import email from '@/assets/imagens/email.png'
import person from '@/assets/imagens/person.png'
import calendario from '@/assets/imagens/calendario.png'
import cep from '@/assets/imagens/cep.png'
import cnpjFornecedor from '@/assets/imagens/cnpjFornecedor.png'
import peca from '@/assets/imagens/peca.png'
import telefone from '@/assets/imagens/Phone.png'
import endereco from '@/assets/imagens/endereco.png'
import preco from '@/assets/imagens/preco.png'
import celular from '@/assets/imagens/celular.png'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useFornecedoresStore } from '@/stores/fornecedores'
import { useClientesStore } from '@/stores/clientes'
import { useOrcamentoStore } from '@/stores/orcamentos'
const props = defineProps(['fields', 'dados', 'titulo'])
const formdata = ref({ ...props.dados })
function estilo(type) {
  if (type == 'checkbox') {
    return 'content-check'
  } else {
    return 'content-input'
  }
}
const route = useRoute()
const dado = ref()
const icon = ref()
if (route.fullPath == '/cadastro/clientes') {
  dado.value = useClientesStore()
} else if (route.fullPath == '/cadastro/fornecedores') {
  dado.value = useFornecedoresStore()
} else if (route.fullPath == '/cadastro/orcamentos') {
  dado.value = useOrcamentoStore()
}

console.log(dado.value)

function cadastro() {
  dado.value.adicionar(formdata.value)
  router.back()
}
</script>
<template>
  <div class="sair" v-if="$route.fullPath != '/'" @click="router.back()">X</div>
  <div class="content-form">
    <h1>{{ props.titulo }}</h1>
    <div class="form">
      <form @submit.prevent="(route.fullPath == '/')? $emit('salvar', formdata): cadastro()" validate>
        <div :class="[estilo(field.type)]" v-for="(field, index) in fields" :key="index">
          <div
            class="icon"
            v-if="(field.type == 'email')? icon = email: (field.type == 'password')? icon = cadeado:(field.value== 'name')? icon = person: (field.value== 'cep')? icon = cep:(field.value == 'endereco')? icon = endereco: (field.value== 'telefone')? icon = telefone:(field.value == 'cellphone')? icon = celular:(field.value == 'pecas' || field.value == 'nomePeca' )? icon = peca:(field.value == 'CNPJ')? icon = cnpjFornecedor:(field.value == 'preco')? icon = preco:(field.type == 'date')? icon = calendario:null"
          >
            <img :src="icon" alt="" />
          </div>
          <InputForm
            :type="field.type"
            :placeholder="field.placeholder"
            v-model="formdata[field.value]"
            :required="field.required"
          />
          <small v-if="field.type == 'password'">Esqueceu a senha?</small>
          <div v-if="field.type == 'checkbox'" class="checkbox">{{ field.nome }}</div>
        </div>
        <ButtonForm
          :titulo="
            $route.fullPath == '/'
              ? 'Entrar'
              : $route.fullPath == '/cadastro/relatorios'
                ? 'Gerar Relatório'
                : 'Cadastrar'
          "
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  font-weight: bold;
}
.content-form {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.sair {
  font-size: 20px;
  color: white;
  position: absolute;
  top: 50px;
  right: 35px;
  cursor: pointer;
}
.content-input {
  display: flex;
  position: relative;
  flex-direction: column;
}
.content-check {
  display: flex;
  align-items: center;
}
.checkbox {
  display: block;
  align-items: center;
  flex-direction: row;
  margin-left: 10px;
  font-size: 13px;
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

small {
  width: 100%;
  display: flex;
  justify-content: end;
  font-size: 10px;
  cursor: pointer;
  margin-bottom: 22px;
}
h1 {
  color: white;
  font-size: 60px;
  text-align: center;
  margin-bottom: 55px;
  display: flex;
}

.form {
  width: 324px;
  padding: 68px 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #707070;
}
</style>
