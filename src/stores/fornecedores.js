import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useFornecedoresStore = defineStore('fornecedores', () => {

 const fornecedores = ref([{
    id: 1,
    name: "Marcos Autopeças ",
    email: "marcospecas@gmail.com",
    CNPJ: "12.345.678/0001-00",
    telefone: "89212202",
    produtos: "Ver produtos",
  },
  {
    id: 2,
    name: "Marcos Autopeças ",
    email: "marcospecas@gmail.com",
    CNPJ: "12.345.678/0001-00",
    telefone: "89212202",
    produtos: "Ver produtos",
  },
  {
    id: 3,
    name: "Marcos Autopeças ",
    email: "marcospecas@gmail.com",
    CNPJ: "12.345.678/0001-00",
    telefone: "89212202",
    produtos: "Ver produtos",
  },
  {
    id: 4,
    name: "Marcos Autopeças",
    email: "marcospecas@gmail.com",
    CNPJ: "12.345.678/0001-00",
    telefone: "89212202",
    produtos: "Ver produtos",
  },
  {
    id: 5,
    name: "Marcos Autopeças",
    email: "marcospecas@gmail.com",
    CNPJ: "12.345.678/0001-00",
    telefone: "89212202",
    produtos: "Ver produtos",
  },
])


  const nextId = ref(6);

  function adicionar(fornecedor) {
    fornecedores.value.push({ ...fornecedor, id: nextId.value });
    nextId.value += 1; // Incrementa o próximo ID
    console.log('Fornecedores após adição:', fornecedores.value); // Verifique os dados
  }


 function removeFornecedor(id) {
   const index = fornecedores.value.findIndex((fornecedor) => fornecedor.id === id)
   fornecedores.value.splice(index, 1)
   console.log('Fornecedores após adição:', fornecedores.value);
 }

 
function updateFornecedor(id, novoFornecedor){
  const index = fornecedores.value.findIndex(fornecedor=> fornecedor.id === id);
  if (index !== -1) {
    fornecedores.value[index] = { ...fornecedores.value[index], ...novoFornecedor };
  }
}



 return { fornecedores, adicionar, removeFornecedor , updateFornecedor}


})
