import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useClientesStore = defineStore('clientes', () => {

 const clientes = ref([  {
    id: 1,
    name: 'Júlia Fuck',
    email: 'juliaifc22@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: ' 5 maio,  2024',
    status: 'ativo'
  },
  {
    id: 2,
    name: 'Rafaela Barbieri da Cruz',
    email: 'rafaelabarbieric@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: ' 5 maio,  2024',
    status: 'ativo'
  },
  {
    id: 3,
    name: 'Ana Laura Manfrom Dias',
    email: 'anamanfrondias@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: ' 5 maio,  2024',
    status: 'ativo'
  },
  {
    id: 4,
    name: 'Isabelli Luísa Rosa',
    email: 'isabelli.ifc@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: '5 maio,  2024',
    status: 'ativo'
  },
  {
    id: 5,
    name: 'Guilherme Schreiber',
    email: 'guilhermeschreiber2007@gmail.com',
    orcamentos: 2,
    vendas: 4,
    servicos: 2,
    data: '5 maio,  2024',
    status: 'ativo'
  }])


  const nextId = ref(6);

  function adicionar(cliente) {
    clientes.value.push({ ...cliente, id: nextId.value });
    nextId.value += 1; // Incrementa o próximo ID
    console.log('Clientes após adição:', clientes.value); // Verifique os dados
  }


 function removeCliente(id) {
   const index = clientes.value.findIndex((cliente) => cliente.id === id)
   clientes.value.splice(index, 1)
   console.log('Clientes após adição:', clientes.value);
 }

 

function updateCliente(id, novoCliente){
  const index = clientes.value.findIndex(cliente => cliente.id === id);
  if (index !== -1) {
    clientes.value[index] = { ...clientes.value[index], ...novoCliente };
  }
}



 return { clientes, adicionar, removeCliente , updateCliente}


})
