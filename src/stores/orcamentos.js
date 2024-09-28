import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOrcamentoStore = defineStore('orcamentos', () => {
  const orcamentos = ref([
    {
      id: 1,
      name: 'Júlia Fuck',
      email: 'juliaifc22@gmail.com',
      cellphone: 'Iphone',
      data: '5 maio,  2024',
      status: 'Aprovado'
    },
    {
      id: 2,
      name: 'Rafaela Barbieri',
      email: 'rafaelabarbieric@gmail.com',
      cellphone: 'Motorola',
      data: '5 maio,  2024',
      status: 'Em avaliação'
    },
    {
      id: 3,
      name: 'Ana Laura Dias',
      email: 'anamanfrondias@gmail.com',
      cellphone: 'Iphone',
      data: '5 maio,  2024',
      status: 'Aprovado'
    },
    {
      id: 4,
      name: 'Isabelli Luísa Rosa',
      email: 'isabelli.ifc@gmail.com',
      cellphone: 'Samsung',
      data: '5 maio,  2024',
      status: 'Em avaliação'
    },
    {
      id: 5,
      name: 'Guilherme Schreiber',
      email: 'guilhermeschreiber@gmail.com',
      cellphone: 'Xiaomi',
      data: '5 maio,  2024',
      status: 'Reprovado'
    }
  ])

  const nextId = ref(6)

  function adicionar(orcamento) {
    orcamentos.value.push({ ...orcamento, id: nextId.value })
    nextId.value += 1 // Incrementa o próximo ID
    console.log('Fornecedores após adição:', orcamentos.value) // Verifique os dados
  }

  function removeOrcamento(id) {
    const index = orcamentos.value.findIndex((orcamento) => orcamento.id === id)
    orcamentos.value.splice(index, 1)
    console.log('Fornecedores após adição:', orcamentos.value)
  }

  function updateOrcamento(id, novoOrcamento) {
    const index = orcamentos.value.findIndex((orcamento) => orcamento.id === id)
    if (index !== -1) {
      orcamentos.value[index] = { ...orcamentos.value[index], ...novoOrcamento }
    }
  }

  return { orcamentos, adicionar, removeOrcamento, updateOrcamento }
})
