<script setup>
import NavbarLinks from './NavbarLinks.vue'
import Inicio from '@/assets/imagens/inicio.png'
import Servicos from '@/assets/imagens/manutencao.png'
import Vendas from '@/assets/imagens/vendas.png'
import Faturamento from '@/assets/imagens/faturamento.png'
import Clientes from '@/assets/imagens/cliente.png'
import Orcamento from '@/assets/imagens/orcamentacao.png'
import Fornecedores from '@/assets/imagens/fornecedor.png'
import Relatorios from '@/assets/imagens/relatorios.png'
import Produtos from '@/assets/imagens/produto.png'
import Perfil from '@/assets/imagens/perfil.png'

const links = [
  {
    text: 'Início',
    icon: 'inicio.png',
    link: '/home'
  },
  {
    text: 'Serviços',
    icon: 'manutencao.png',
    link: '/servicos'
  },
  {
    text: 'Vendas',
    icon: 'vendas.png',
    link: '/vendas'
  },
  {
    text: 'Faturamento',
    icon: 'faturamento.png',
    link: '/faturamento'
  },
  {
    text: 'Clientes',
    icon: 'cliente.png',
    link: '/clientes'
  },
  {
    text: 'Orçamento',
    icon: 'orcamentacao.png',
    link: '/orcamentos'
  },
  {
    text: 'Fornecedores',
    icon: 'fornecedor.png',
    link: '/fornecedores'
  },
  {
    text: 'Relatórios',
    icon: 'relatorios.png',
    link: '/relatorios'
  },
  {
    text: 'Produtos',
    icon: 'produtos.png',
    link: '/produtos'
  },
  {
    text: 'Equipamentos',
    icon: 'equipamentos.png',
    link: '/equipamentos'
  },
  {
    text: 'Perfil',
    icon: 'perfil.png',
    link: '/perfil'
  }
]
</script>
<template>
  <ul>
    <NavbarLinks v-for="(text, index) in links" :key="index" :text="text.text" :link="text.link" :icon="text.text == 'Início'
        ? Inicio
        : text.text == 'Serviços'
          ? Servicos
          : text.text == 'Vendas'
            ? Vendas
            : text.text == 'Faturamento'
              ? Faturamento
              : text.text == 'Clientes'
                ? Clientes
                : text.text == 'Orçamento'
                  ? Orcamento
                  : text.text == 'Fornecedores'
                    ? Fornecedores
                    : text.text == 'Relatórios'
                      ? Relatorios
                      : text.text == 'Produtos'
                        ? Produtos
                        : text.text == 'Perfil'
                          ? Perfil
                          : text.text == 'Equipamentos'
                            ? Servicos
                            : ''
      " />
  </ul>
</template>
<style scoped>
ul {
  padding: 35px 0px;
}
</style>
