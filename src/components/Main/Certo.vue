<template>
  <div id="app">
    <img src="../../assets/V.png" id="certo"/>
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
        this.updateLevel(this.$route.params.id);
          window.history.back();
      }
    },
    // Este método inicia um evento para acrescentar o somador para o Score Final.
    eventUpdate(){
      this.$emit('updateSomador');
    },
    updateLevel(levelName){
      this.$emit('updateLevel', levelName);
    },

    // firstLevelCompletedUpdate(){
    //   this.$emit('updateFirstLevel');
    // },

    // secondLevelCompletedUpdate(){
    //   this.$emit('updateSecondLevel');
    // },

    // thirdLevelCompletedUpdate(){
    //   this.$emit('updateThirdLevel');
    // },

    // fourthLevelCompletedUpdate(){
    //   this.$emit('updateFourthLevel');
    // },
    
    // fifthLevelCompletedUpdate(){
    //   this.$emit('updateFifthLevel');
    // },
    
    // sixthLevelCompletedUpdate(){
    //   this.$emit('updateSixthLevel');
    // },

    // seventhLevelCompletedUpdate(){
    //   this.$emit('updateSeventhLevel');
    // },
    
    // eighthLevelCompletedUpdate(){
    //   this.$emit('updateEighthLevel');
    // },
       
    // ninethLevelCompletedUpdate(){
    //   this.$emit('updateNinethLevel');
    // },
    
    // tenthLevelCompletedUpdate(){
    //   this.$emit('updateTenthLevel');
    // },
    
    // eleventhLevelCompletedUpdate(){
    //   this.$emit('updateEleventhLevel');
    // },
        
    // twelfthLevelCompletedUpdate(){
    //   this.$emit('updateTwelfthLevel');
    // },
        
    // thirteenthLevelCompletedUpdate(){
    //   this.$emit('updateThirteenthLevel');
    // },

    // fourteenthLevelCompletedUpdate(){
    //   this.$emit('updateFourteenthLevel');
    // },
    
    // fifteenthLevelCompletedUpdate(){
    //   this.$emit('updateFifteenthLevel');
    // },
    
    // sixteenthLevelCompletedUpdate(){
    //   this.$emit('updateSixteenthLevel');
    // },
      
    // seventeenthLevelCompletedUpdate(){
    //   this.$emit('updateSeventeenthLevel');
    // }

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