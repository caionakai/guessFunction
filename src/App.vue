<template>
  <div id="app">
    <router-view @updateSomador="updateSomador()" @resetSomador="zeraSomador()" 
    :firstLevelCompleted="firstLevelCompleted" @updateFirstLevel="updateFirstLevel()" 
    :pontuacao="somador" @resetAllLevels="resetAllLevels()" @updateSecondLevel="updateSecondLevel()"
    :secondLevelCompleted="secondLevelCompleted" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function(){
    return {
      somador: 0,
      firstLevelCompleted: false,
      secondLevelCompleted: false
    }
  },
  methods:{
    updateSomador(){
      this.somador += 1
    },
    zeraSomador(){
      this.somador = 0
    },
    updateFirstLevel(){
      this.firstLevelCompleted = true
    },
    updateSecondLevel(){
      this.secondLevelCompleted = true
    },
    resetAllLevels(){
      this.firstLevelCompleted = false;
      this.secondLevelCompleted = false;
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
