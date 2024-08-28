import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      component: () => import('../layouts/AdminLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/servicos',
          name: 'servicos',
          component: () => import('../views/ServicosView.vue')
        },
        {
          path: '/vendas',
          name: 'vendas',
          component: () => import('../views/VendasView.vue')
        },
        {
          path: '/faturamento',
          name: 'faturamento',
          component: () => import('../views/FaturamentoView.vue')
        },
        {
          path: '/clientes',
          name: 'clientes',
          component: () => import('../views/ClientesView.vue')
        },
        {
          path: '/orcamentos',
          name: 'orcamentos',
          component: () => import('../views/OrcamentosView.vue')
        },
        {
          path: '/fornecedores',
          name: 'fornecedores',
          component: () => import('../views/FornecedoresView.vue')
        },
        {
          path: '/relatorios',
          name: 'relatorios',
          component: () => import('../views/RelatoriosView.vue')
        },
        {
          path: '/produtos',
          name: 'produtos',
          component: () => import('../views/ProdutosView.vue')
        },
        {
          path: '/perfil',
          name: 'perfil',
          component: () => import('../views/PerfilView.vue')
        },
        {
          path: '/cadastro/clientes',
          name: 'cadastroCliente',
          component: () => import('../views/cadastros/CadastroClienteView.vue')
        }

      ]
    },
    {
      path: '/cliente',
      component: () => import('../layouts/ClienteLayout.vue'),
      children: [
        {
          path: '/homeCliente',
          name: 'home',
          component: () => import('../views/cliente/HomeView.vue')
        },
        {
          path: '/servicosCliente',
          name: 'servicos',
          component: () => import('../views/cliente/ServicosView.vue'),
        },
        {
          path: '/orcamentosCliente',
          name: 'orcamentos',
          component: () => import('../views/cliente/OrcamentosView.vue'),
        },
        {
          path: '/produtosCliente',
          name: 'produtos',
          component: () => import('../views/cliente/ProdutosView.vue'),
        },
        {
          path: '/perfilCliente',
          name: 'perfil',
          component: () => import('../views/cliente/PerfilView.vue'),
        }
      ],
    },

  ]
})

export default router
