<template>
  <div id="app">
    <!-- Every event and props have to be defined here :-) -->
    <router-view :pontuacao="somador" :level="level"
    @updateFirstLevel="updateFirstLevel()" @updateSomador="updateSomador()" 
    @resetSomador="zeraSomador()" @resetAllLevels="resetAllLevels()"
    @updateSecondLevel="updateSecondLevel()"
    @updateLevel="updateLevel($event)"
    @updateThirdLevel="updateThirdLevel()"
    @updateFourthLevel="updateFourthLevel()" @updateFifthLevel="updateFifthLevel()"
    @updateSixthLevel="updateSixthLevel()" @updateSeventhLevel="updateSeventhLevel()"
    @updateEighthLevel="updateEighthLevel()" @updateNinethLevel="updateNinethLevel()"
    @updateTenthLevel="updateTenthLevel()" @updateEleventhLevel="updateEleventhLevel()"
    @updateTwelfthLevel="updateTwelfthLevel()" @updateThirteenthLevel="updateThirteenthLevel()"
    @updateFourteenthLevel="updateFourteenthLevel()" @updateFifteenthLevel="updateFifteenthLevel()"
    @updateSixteenthLevel="updateSixteenthLevel()" @updateSeventeenthLevel="updateSeventeenthLevel()"
    @updateEighteenthLevel="updateEighteenthLevel()"
    
    />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      somador: 0,
      level: [{}],
      templevel: {}, 
    }
  },
  mounted(){
    this.templevel = JSON.parse(localStorage.getItem("level"));
  },
  methods:{
    updateSomador(){
      this.somador += 1
    },
    zeraSomador(){
      this.somador = 0
    },
    updateLevel(levelName){
      console.log(levelName)
      this.templevel[levelName] = true; 
      localStorage.setItem('level', JSON.stringify(this.templevel))
      // this.level[levelName] = true
      // console.log(this.level);
    },
    // The Update level method is called when the page Certo with the right condition emit some event
    // updateFirstLevel(){
    //   this.level.firstLevelCompleted = true
    // },
    // updateSecondLevel(){
    //   this.level.secondLevelCompleted = true
    // },
    // updateThirdLevel(){
    //   this.level.thirdLevelCompleted = true
    // },
    // updateFourthLevel(){
    //   this.level.fourthLevelCompleted = true
    // },
    // updateFifthLevel(){
    //   this.level.fifthLevelCompleted = true
    // },
    // updateSixthLevel(){
    //   this.level.sixthLevelCompleted = true
    // },
    // updateSeventhLevel(){
    //   this.level.seventhLevelCompleted = true
    // },    
    // updateEighthLevel(){
    //   this.level.eighthLevelCompleted = true
    // },
    // updateNinethLevel(){
    //   this.level.ninethLevelCompleted = true
    // },
    // updateTenthLevel(){
    //   this.level.tenthLevelCompleted = true
    // },
    // updateEleventhLevel(){
    //   this.level.eleventhLevelCompleted = true
    // },
    // updateTwelfthLevel(){
    //   this.level.twelfthLevelCompleted = true
    // },
    // updateThirteenthLevel(){
    //   this.level.thirteenthLevelCompleted = true
    // },
    // updateFourteenthLevel(){
    //   this.level.fourteenthLevelCompleted = true
    // },
    // updateFifteenthLevel(){
    //   this.level.fifteenthLevelCompleted = true
    // },
    // updateSixteenthLevel(){
    //   this.level.sixteenthLevelCompleted = true
    // },
    // updateSeventeenthLevel(){
    //   this.level.seventeenthLevelCompleted = true
    // },    
    // updateEighteenthLevel(){
    //   this.level.eighteenthLevelCompleted = true
    // },
    
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
      this.level.tenthLevelCompleted =false;
      this.level.eleventhLevelCompleted = false;
      this.level.twelfthLevelCompleted = false;
      this.level.thirteenthLevelCompleted = false;
      this.level.fourteenthLevelCompleted = false;
      this.level.fifteenthLevelCompleted = false;
      this.level.sixteenthLevelCompleted = false;
      this.level.seventeenthLevelCompleted = false;
      this.level.eighteenthLevelCompleted = false;
    },
  }
}

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
