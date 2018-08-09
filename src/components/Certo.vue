<template>
  <div id="app">
    <img src="../assets/V.png" id="certo"/>
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
        if(this.$route.params.id === 'derivativesimple'){
          this.eighthLevelCompletedUpdate();
          this.$router.replace({name: 'Map2'});          
        }
        if(this.$route.params.id === 'derivativesimpleq2'){
          this.ninethLevelCompletedUpdate();
          this.$router.replace({name: 'Map3'});          
        }
        if(this.$route.params.id === 'question4'){
          this.tenthLevelCompletedUpdate();
          this.$router.replace({name: 'Map3'});          
        }
        if(this.$route.params.id === 'question5'){
          this.eleventhLevelCompletedUpdate();
          this.$router.replace({name: 'Map3'});          
        }
        if(this.$route.params.id === 'deriq3'){
          this.twelfthLevelCompletedUpdate();
          this.$router.replace({name: 'Map3'});          
        }
        if(this.$route.params.id === 'deriq4'){
          this.thirteenthLevelCompletedUpdate();
          this.$router.replace({name: 'Map3'});          
        }        
        if(this.$route.params.id === 'intQ6'){
          this.fourteenthLevelCompletedUpdate();
          this.$router.replace({name: 'Map3'});          
        }
        if(this.$route.params.id === 'intq7'){
          this.fifteenthLevelCompletedUpdate();
          this.$router.replace({name: 'Map4'});          
        }
          if(this.$route.params.id === 'limq1'){
          this.sixteenthLevelCompletedUpdate();
          this.$router.replace({name: 'Map4'});          
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
    },
    
    eighthLevelCompletedUpdate(){
      this.$emit('updateEighthLevel');
    },
       
    ninethLevelCompletedUpdate(){
      this.$emit('updateNinethLevel');
    },
    
    tenthLevelCompletedUpdate(){
      this.$emit('updateTenthLevel');
    },
    
    eleventhLevelCompletedUpdate(){
      this.$emit('updateEleventhLevel');
    },
        
    twelfthLevelCompletedUpdate(){
      this.$emit('updateTwelfthLevel');
    },
        
    thirteenthLevelCompletedUpdate(){
      this.$emit('updateThirteenthLevel');
    },

    fourteenthLevelCompletedUpdate(){
      this.$emit('updateFourteenthLevel');
    },
    
    fifteenthLevelCompletedUpdate(){
      this.$emit('updateFifteenthLevel');
    },
    
    sixteenthLevelCompletedUpdate(){
      this.$emit('updateSixteenthLevel');
    },
      
    seventeenthLevelCompletedUpdate(){
      this.$emit('updateSeventeenthLevel');
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