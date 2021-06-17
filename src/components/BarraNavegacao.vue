<template>
    <nav class="navbar navbar-expand-lg navbar-bytebank">
      <a class="navbar-brand" href="#">ByteBank</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <div class="small_black_bar"></div>
          <div class="small_black_bar"></div>
          <div class="small_black_bar"></div>
        </span>
      </button>
      <div class="collapse navbar-collapse">
        
        <BarraNavegacaoLogado v-if="usuarioEstaLogado"/>
        <BarraNavegacaoDeslogado v-else/>
        
      </div>
    </nav>
</template>

<script>
import BarraNavegacaoDeslogado from '@/components/BarraNavegacaoDeslogado'
import BarraNavegacaoLogado from '@/components/BarraNavegacaoLogado'

export default {

    components: {
      BarraNavegacaoLogado,
      BarraNavegacaoDeslogado
    },
    //Propriedades computadas para as que são dinâmicas
    computed: {
      usuarioEstaLogado() {
        return Boolean(localStorage.getItem('token'));
      }
    }
}
</script>

<style>
    .navbar {
    background: #27ae60;
    }
    .navbar-bytebank a {
    color: #fff;
    }
    .navbar-bytebank a:hover {
    color: #000;
    }

    .small_black_bar {
    width: 30px;
    height: 3px;
    background-color: black;
    margin: 5px 2px;
    }
</style>