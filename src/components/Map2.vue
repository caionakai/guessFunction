<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.eighthLevelCompleted" src="../assets/Map/tower.png" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.eighthLevelCompleted && !this.level.ninethLevelCompleted" src="../assets/Map/towerDone1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.ninethLevelCompleted" src="../assets/Map/towerDone2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>

    <map name="Map" id="Map">
        <area v-if="!this.level.eighthLevelCompleted" href="#" shape="poly" coords="466,377,488,387,494,397,499,410,500,422,495,436,487,445,477,449,472,453,454,452,446,447,438,439,433,430,431,416,433,402,437,389,449,382" />
        <area v-if="!this.level.ninethLevelCompleted" href="#" shape="poly" coords="463,482,486,492,497,505,501,520,501,532,495,545,486,556,475,563,466,568,455,566,443,560,431,545,428,529,427,515,433,500,444,491" />
    </map>


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
  props: ['life', 'level'],
  mounted(){
    this.windowonload();
  },
  methods:{
    // this method is resposible for recalculate the map image when the screen is resized
    windowonload() {
    var ImageMap = function (map, img) {
            var n,
            areas = map.getElementsByTagName('area'),
            len = areas.length,
            coords = [],
            previousWidth = 987;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    x = img.offsetWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = img.offsetWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('Map'), document.getElementById('trilha'));
    imageMap.resize();
    return;
}
  }
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
