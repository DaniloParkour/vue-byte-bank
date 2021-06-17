import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'

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

const actions = {
    //O Vuex já injeta na funação o commit pois é do contexto do Vuex
    efeturaLogin({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', usuario)
                .then(response => {
                    commit('DEFINIR_USUARIO_LOGADO', {
                        token: response.data.access_token,
                        usuario: response.data.user
                    })
                    resolve(response.data)
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                })
        })
    }
}

export default new Vuex.Store({
    state: estado,
    mutations,
    actions
})