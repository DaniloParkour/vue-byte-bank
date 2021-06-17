<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente v-for="gerente in gerentes" :key="gerente.numero" :gerente="gerente" />
    </div>
  </div>
</template>

<script>
import Gerente from '@/components/Gerente.vue'

export default {
  components: {
    Gerente
  },
  data() {
    return {
      gerentes: []
    }
  },
  mounted() {
    this.$http.get('gerentes')
                .then(response => this.gerentes = response.data)
                .catch(erro => console.log(erro))
                
  },

  //Ciclo de vida antes de entrar na rota, o objeto ainda nem foi criado
  /*
  beforeRouteEnter(to, from, next) {
    //Se não tem um usuário logado ao montar a tela Gerentes, mandar para a rota login
    if(texte_exemplo) {
      console.log('Não há usuário logado');
      // Muda a next page. Seria com antes de começar a montar o componente enviasse um
      // this.$router.push({ name: 'login' });
      next( { name: 'login' } );
    }
  }
  */
}
</script>

<style>

</style>