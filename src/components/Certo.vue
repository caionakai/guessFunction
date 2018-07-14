<template>
  <div id="app">
    <img src="../assets/V.jpg" id="certo"/>
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
    // Acrescenta +1 no contador de acertos.
    this.eventUpdate();
  },
  methods:{
    timeOver(){
      this.count -= 1;
      if(this.count > 0){
        setTimeout(this.timeOver, 1000);
      }else{
        if(this.$route.params.id === 'seno'){
          this.firstLevelCompletedUpdate();
          this.$router.replace({name: 'Map'});
        }        
        if(this.$route.params.id === 'cosseno'){
          this.secondLevelCompletedUpdate();
          this.$router.replace({name: 'Map'});
        }
        if(this.$route.params.id === 'integralsimple'){
          this.thirdLevelCompletedUpdate();
          this.$router.replace({name: 'Map'});          
        }        
        if(this.$route.params.id === 'integralsimpleradio'){
          this.fourthLevelCompletedUpdate();
          this.$router.replace({name: 'Map'});          
        }
        if(this.$route.params.id === 'identitytrigonometric'){
          this.fifthLevelCompletedUpdate();
          this.$router.replace({name: 'Map'});          
        }
        if(this.$route.params.id === 'integralundefined'){
          this.sixthLevelCompletedUpdate();
          this.$router.replace({name: 'Map'});          
        }
        if(this.$route.params.id === 'integraldefinite'){
          this.seventhLevelCompletedUpdate();
          this.$router.replace({name: 'Map2'});          
        }
      }
    },
    // Este método inicia um evento para acrescentar o somador para o Score Final.
    eventUpdate(){
      this.$emit('updateSomador');
    },

    firstLevelCompletedUpdate(){
      this.$emit('updateFirstLevel');
    },

    secondLevelCompletedUpdate(){
      this.$emit('updateSecondLevel');
    },

    thirdLevelCompletedUpdate(){
      this.$emit('updateThirdLevel');
    },

    fourthLevelCompletedUpdate(){
      this.$emit('updateFourthLevel');
    },
    
    fifthLevelCompletedUpdate(){
      this.$emit('updateFifthLevel');
    },
    
    sixthLevelCompletedUpdate(){
      this.$emit('updateSixthLevel');
    },

    seventhLevelCompletedUpdate(){
      this.$emit('updateSeventhLevel');
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