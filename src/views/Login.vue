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
               //$http foi definido para uso no arquivo "main.js"
               this.$http.post('auth/login', this.usuario)
                .then(response => {
                    console.log(response);
                    //Salvar o token para não precisar de login novamente, vamos remover no logout
                    localStorage.setItem("token", response.data.access_token);
                    this.$router.push({ name: 'gerentes' });
                })
                .catch(erro => console.log(erro));
           }     
    }
}
</script>