<template>
  <div id="app">
    <img src="../assets/V.jpg" id="certo"></img>
  </div>
</template>

<script>
export default {
  name: 'Certo',
  data:{
    count: 0
  },
  created() {
    // Count é a quantidade de segundos até redirecionar para outra página!
    this.count = 2;
    this.timeOver();
    this.eventUpdate();
  },
  methods:{
    timeOver(){
      this.count -= 1;
      if(this.count > 0){
        setTimeout(this.timeOver, 1000);
      }else{
        if(this.$route.params.id === 'seno'){
          this.$router.replace({name: 'Cosseno'});
        }        
        if(this.$route.params.id === 'cosseno'){
          this.$router.replace({name: 'Score'});
        }
      }
    },
    eventUpdate(){
      this.$emit('updateSomador');
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
#certo{
    height: 40%;
    width: 40%;
}
</style>