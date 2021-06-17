import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const estado = {
    token: null,
    usuario: {}
}

//Os valores dos estados não podem ser alterados diretamente
//Para poder alterar os valores dos estados usaremos as mutations
const mutations = {
    DEFINIR_USUARIO_LOGADO (state, { token, usuario }) {
        state.usuario = usuario;
        state.token = token;
    },
    DESLOGAR_USUARIO(state) {
        state.token = null
        state.usuario = {}
    }
}

export default new Vuex.Store({
    state: estado,
    mutations
})