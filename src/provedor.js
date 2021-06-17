import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const estado = {
    token: null,
    usuario: {}
}

export default new Vuex.Store({
    state: estado
})