<template>
  <div id="mapa">
    <img src="../assets/mapa.png" alt="" id="trilha" usemap="#Map" />
    <map name="Map" id="Map">
        <area alt="" title="" href="#/seno" shape="poly" coords="69,470,92,475,102,487,98,499,82,504,63,505,43,502,31,482,48,473" />
        <area alt="" title="" href="#/cosseno" shape="poly" coords="209,428,239,435,251,443,245,457,230,460,207,463,186,459,173,453,178,436" />
        <area alt="" title="" href="#/score" shape="poly" coords="898,368,920,369,932,361,948,367,966,367,967,390,934,391,898,389" />
        <area alt="" title="" href="#/integralsimple" shape="poly" coords="409,412,447,419,454,436,438,445,416,448,392,444,379,436,384,422" />
    </map>
    <div v-if="this.firstLevelCompleted" id="firstDiv">
      <img id="firstLevel" src="../assets/done.png" />
    </div>

    <div v-if="this.secondLevelCompleted" id="secondDiv">
      <img id="secondLevel" src="../assets/done.png" />
    </div>
    
    <div id="arrowWin">
      <img id="arrowWinImage" src="../assets/arrow.gif" />
    </div>

    <div id="treasureDiv">
      <img id="treasureImage" src="../assets/treasure.png" />
    </div>

    <div id="lifeDiv">
      <img v-if="life === 3" id="lifeImage" src="../assets/3life.png" />
      <img v-if="life === 2" id="lifeImage" src="../assets/2life.png" />
      <img v-if="life === 1" id="lifeImage" src="../assets/1life.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mapa',
  props: ['firstLevelCompleted', 'secondLevelCompleted', 'life'],
}

</script>

<style scoped>

#trilha{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-position: 50% 50%;

}
#firstLevel{
  width: 100%;
  height: 100%;
}
#firstDiv{
  position: absolute;
  width: 10%;
  height: 10%;
  left: 2.7%;
  top: 84%;
}
#secondLevel{
  width: 100%;
  height: 100%;
}
#secondDiv{
  position: absolute;
  width: 10%;
  height: 10%;
  left: 18%;
  top: 78%;
}
#arrowWinImage{
  width: 150%;
  height: 150%;
  margin-left: 130%;
  margin-top: 50%;
}
#arrowWin{
  position: absolute;
  left: 87.9%;
  top: 50%;
}
#treasureImage{
  width: 250%;
  height: 250%;
  margin-left: 100%;
  margin-top: 50%;
}
#treasureDiv{
  position: absolute;
  left: 87.9%;
  top: 60%;
}
#lifeImage{
  width: 200%;
  height: 200%;
}
#lifeDiv{
  position: absolute;
  top: 0%;
  left: 88.9%;

}
</style>
