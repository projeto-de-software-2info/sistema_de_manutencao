<script setup>
import NavbarLinks from './ClienteNavbarLinks.vue'
import Inicio from '@/assets/imagens/inicio.png'
import Servicos from '@/assets/imagens/manutencao.png'
import Orcamento from '@/assets/imagens/orcamentacao.png'
import Produtos from '@/assets/imagens/produto.png'
import Perfil from '@/assets/imagens/perfil.png'

const links = [
  {
    text: 'Início',
    icon: 'inicio.png',
    link: '/homeCliente'
  },
  {
    text: 'Serviços',
    icon: 'manutencao.png',
    link: '/servicosCliente'
  },
  {
    text: 'Orçamento',
    icon: 'orcamentacao.png',
    link: '/orcamentosCliente'
  },
  {
    text: 'Produtos',
    icon: 'produtos.png',
    link: '/produtosCliente'
  },
  {
    text: 'Perfil',
    icon: 'perfil.png',
    link: '/perfilCliente'
  }
]
</script>
<template>
  <ul>
    <NavbarLinks
      v-for="(text, index) in links"
      :key="index"
      :text="text.text"
      :link="text.link"
      :icon="
        text.text == 'Início'
          ? Inicio
          : text.text == 'Serviços'
            ? Servicos
                  : text.text == 'Orçamento'
                    ? Orcamento
                        : text.text == 'Produtos'
                          ? Produtos
                          : text.text == 'Perfil'
                            ? Perfil
                            : ''
      "
    />
  </ul>
</template>
<style scoped>
ul {
  padding: 35px 0px;
}
</style>
