<template>
  <div id="app">
    <!-- Every event and props have to be defined here :-) -->
    <router-view :pontuacao="somador" :life="life"
    :firstLevelCompleted="firstLevelCompleted" :secondLevelCompleted="secondLevelCompleted" 
    @updateFirstLevel="updateFirstLevel()" @updateSomador="updateSomador()" 
    @resetSomador="zeraSomador()" @resetAllLevels="resetAllLevels()"
    @updateSecondLevel="updateSecondLevel()" @decrementLife="decrementLife()"
    @restoreLife="restoreLife()"
    
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
    decrementLife(){
      this.life -= 1 
    },
    restoreLife(){
      this.life = 3;
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
