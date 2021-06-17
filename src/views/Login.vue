<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="efetuarLogin" >
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" v-model="usuario.email">
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" v-model="usuario.senha">
            </div>
            
            <button type='submit' class="btn btn-primary brn-block"> 
                Logar 
            </button>
            <router-link :to="{ name: 'novo.usuario' }">
                Não possui um cadastro, cadastre-se aqui!
            </router-link>
            
        </form>
    </div>
</template> 

<script>

//Exemplo de import com @ que faz o caminho partir de src
//Por exemplo, para acessar src/components/exemplo
//import exemplo from '@/components/exemplo'

export default {
    data() {
        return {
            usuario: {}
        }
    },
    methods: {
           efetuarLogin() {

               //Usamos agora apenas a action definida no provedor para o Vuex
               this.$store.dispatch('efeturaLogin', this.usuario)
                            .then( () => { this.$router.push({ name: 'gerentes' }) } )

               //$http foi definido para uso no arquivo "main.js"
               /*
               this.$http.post('auth/login', this.usuario)
                .then(response => {
                    console.log(response);
                    //Salvar o token para não precisar de login novamente, vamos remover no logout
                    //Não vamos mais usar a localScorage, agora vai ser o vuex
                    //localStorage.setItem("token", response.data.access_token);

                    //Não pode ser alterado diretamente como nas linas abaixo
                    //this.$store.state.token = response.data.access_token;
                    //this.$store.state.usuario = response.data.user;

                    //Fazermos a alteração chamando o commit e passando a mutation que definimos no
                    //provedor.js e que desejamos usar aqui. No caso a 'DEFINIR_USUARIO_LOGADO'
                    this.$store.commit('DEFINIR_USUARIO_LOGADO', {
                        token: response.data.access_token,
                        usuario: response.data.user
                    })

                    this.$router.push({ name: 'gerentes' });
                })
                .catch(erro => console.log(erro));
                */
           }     
    }
}
</script>