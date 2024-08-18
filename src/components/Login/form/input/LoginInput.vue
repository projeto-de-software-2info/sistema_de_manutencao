<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  required: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])
function InputValor(value) {
  if (props.type !== 'checkbox') {
    emit('update:modelValue', value)
  }
}
function checkboxValor(checked) {
  if (props.type === 'checkbox') {
    emit('update:modelValue', checked)
  }
}
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="type !== 'checkbox' ? modelValue : undefined"
    :checked="type === 'checkbox' ? false : modelValue"
    @input="InputValor($event.target.value)"
    @change="checkboxValor($event.target.checked)"
    :required="required"
  />
</template>

<style scoped>
* {
  font-weight: bold;
  color: #012340;
}
input {
  border-radius: 8px;
  border: 1px solid #012340;
  height: 35px;
  padding: 10px;
  text-indent: 25px;
}

input[type='email'] {
  margin-bottom: 18px;
}

input::placeholder {
  font-weight: bold;
  padding: 15px;
}

input:focus {
  border: 1px solid #012340;
  outline: none;
}
input:checked {
  accent-color: #012340;
}
</style>
