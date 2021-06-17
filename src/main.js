import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import provedor from './provedor' 

import http from '@/http';

Vue.config.productionTip = false

//Torna acessível no resto do projeto apenas chamadno "this.$http"
Vue.prototype.$http = http;

new Vue({
  router,
  store: provedor, //Podemos usar por causa do Vuex que está sendo usado
  render: h => h(App)
}).$mount('#app')
