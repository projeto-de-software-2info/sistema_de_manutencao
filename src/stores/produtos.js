import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProdutoStore = defineStore('produtos', () => {
  const produtos = ref([
    {
      id: 1,
      produto: 'Capinha Rosa A53',
      loja: 'Mobile Tech',
      tipo: 'Acessório',
      quantidade: '5 unidades',
      valor: 'R$ 25,50'
    },
    {
      id: 2,
      produto: 'Capinha Rosa A53',
      loja: 'Mobile Tech',
      tipo: 'Acessório',
      quantidade: '5 unidades',
      valor: 'R$ 25,50'
    },
    {
      id: 3,
      produto: 'Capinha Rosa A53',
      loja: 'Mobile Tech',
      tipo: 'Acessório',
      quantidade: '5 unidades',
      valor: 'R$ 25,50'
    },
    {
      id: 4,
      produto: 'Capinha Rosa A53',
      loja: 'Mobile Tech',
      tipo: 'Acessório',
      quantidade: '5 unidades',
      valor: 'R$ 25,50'
    },
    {
      id: 5,
      produto: 'Capinha Rosa A53',
      loja: 'Mobile Tech',
      tipo: 'Acessório',
      quantidade: '5 unidades',
      valor: 'R$ 25,50'
    }
  ])

  const nextId = ref(6)

  function adicionar(produto) {
    produtos.value.push({ ...produto, id: nextId.value })
    nextId.value += 1 // Incrementa o próximo ID
    console.log('Produtos após adição:', produtos.value) // Verifique os dados
  }

  function removeProduto(id) {
    const index = produtos.value.findIndex((produto) => produto.id === id)
    produtos.value.splice(index, 1)
    console.log('Produtos após adição:', produtos.value)
  }

  function updateProduto(id, novoProduto) {
    const index = produtos.value.findIndex((produto) => produto.id === id)
    if (index !== -1) {
      produtos.value[index] = { ...produtos.value[index], ...novoProduto }
    }
  }

  return { produtos, adicionar, removeProduto, updateProduto}
})
export const useSearchStore = defineStore('pesquisa', () => {
  const search = ref('')
  const filter = ref('Todos os filtros')
  return { search, filter }
})