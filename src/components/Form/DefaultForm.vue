<script setup>
import { ref } from 'vue'
import ButtonForm from './button/ButtonForm.vue'
import InputForm from './input/InputForm.vue'
import router from '@/router'
const props = defineProps(['fields', 'dados', 'titulo'])
const formdata = ref({ ...props.dados })
function estilo(type) {
  if (type == 'checkbox') {
    return 'content-check'
  } else {
    return 'content-input'
  }
}
</script>
<template>
  <div class="sair" v-if="$route.fullPath != '/'" @click="router.back()">X</div>
  <div>
    <h1>{{ props.titulo }}</h1>
    <div class="form">
      <form @submit.prevent="$emit('enviar', formdata)" validate>
        <div :class="[estilo(field.type)]" v-for="(field, index) in fields" :key="index">
          <div class="icon"></div>
          <InputForm
            :type="field.type"
            :placeholder="field.placeholder"
            v-model="formdata[field.value]"
            :required="field.required"
          />
          <small v-if="field.type == 'password'">Esqueceu a senha?</small>
          <div v-if="field.type == 'checkbox'" class="checkbox">{{ field.nome }}</div>
        </div>
        <ButtonForm :titulo="$route.fullPath == '/' ? 'Entrar' : 'Cadastrar'" />
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  font-weight: bold;
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
