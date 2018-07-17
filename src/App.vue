<template>
  <div id="app">
    <!-- Every event and props have to be defined here :-) -->
    <router-view :pontuacao="somador" :life="life" :level="level"
    @updateFirstLevel="updateFirstLevel()" @updateSomador="updateSomador()" 
    @resetSomador="zeraSomador()" @resetAllLevels="resetAllLevels()"
    @updateSecondLevel="updateSecondLevel()" @decrementLife="decrementLife()"
    @restoreLife="restoreLife()" @updateThirdLevel="updateThirdLevel()"
    @updateFourthLevel="updateFourthLevel()" @updateFifthLevel="updateFifthLevel()"
    @updateSixthLevel="updateSixthLevel()" @updateSeventhLevel="updateSeventhLevel()"
    @updateEighthLevel="updateEighthLevel()" @updateNinethLevel="updateNinethLevel()"
    
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      somador: 0,
      life: 3,
      level: [{
        firstLevelCompleted:false,
        secondLevelCompleted:false,
        thirdLevelCompleted:false,
        fourthLevelCompleted:false,
        fifthLevelCompleted:false,
        sixthLevelCompleted:false,
        seventhLevelCompleted:false,
        eighthLevelCompleted:false,
        ninethLevelCompleted:false,

      }]
    }
  },
  methods:{
    updateSomador(){
      this.somador += 1
    },
    zeraSomador(){
      this.somador = 0
    },
    decrementLife(){
      this.life -= 1 
    },
    restoreLife(){
      this.life = 3;
    },
    // The Update level method is called when the page Certo with the right condition emit some event
    updateFirstLevel(){
      this.level.firstLevelCompleted = true
    },
    updateSecondLevel(){
      this.level.secondLevelCompleted = true
    },
    updateThirdLevel(){
      this.level.thirdLevelCompleted = true
    },
    updateFourthLevel(){
      this.level.fourthLevelCompleted = true
    },
    updateFifthLevel(){
      this.level.fifthLevelCompleted = true
    },
    updateSixthLevel(){
      this.level.sixthLevelCompleted = true
    },
    updateSeventhLevel(){
      this.level.seventhLevelCompleted = true
    },    
    updateEighthLevel(){
      this.level.eighthLevelCompleted = true
    },
    updateNinethLevel(){
      this.level.ninethLevelCompleted = true
    },
    
    // This method is called when the page Intro is loaded
    resetAllLevels(){
      this.level.firstLevelCompleted = false;
      this.level.secondLevelCompleted = false;
      this.level.thirdLevelCompleted = false;
      this.level.fourthLevelCompleted = false;
      this.level.fifthLevelCompleted = false;
      this.level.sixthLevelCompleted = false;
      this.level.seventhLevelCompleted = false;
      this.level.eighthLevelCompleted = false;
      this.level.ninethLevelCompleted = false;
    },
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
