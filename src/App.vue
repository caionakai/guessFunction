<template>
  <div id="app">
    <router-view @updateSomador="updateSomador()" @resetSomador="zeraSomador()" :pontuacao="somador"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      somador: 0
    }
  },
  methods:{
    updateSomador(){
      this.somador += 1
    },
    zeraSomador(){
      this.somador = 0
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
