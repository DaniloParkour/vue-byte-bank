import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import provedor from '@/provedor'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    /* Dessa forma, além de importar apenas quando necessário, o webpack vai agrupar com as
    demais rotas com ChunkName "funcionarios" */
    component: () => import(/* webpackChunkName: "funcionarios" */ '../views/Gerentes.vue')
  },
  { 
    path: '/cadastre-se',
    name: 'novo.usuario',
    //Dessa forma, a importação só será feita quando o componente for chamado
    component: () => import ('../views/NovoUsuario'),
    meta: {
      publica: true //será usado para indicar que a rota não precisa de autenticação
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes
})

//Antes de cada rota executar uma verificação
router.beforeEach( ( routeTo, routeFrom, next) => {
    if( !routeTo.meta.publica && !provedor.state.token) {
      return next( { path: '/login' } );
    }
    next();
  }
);

export default router
