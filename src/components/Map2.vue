<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.eighthLevelCompleted" src="../assets/Map/tower.png" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.eighthLevelCompleted && !this.level.ninethLevelCompleted" src="../assets/Map/towerDone1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.ninethLevelCompleted" src="../assets/Map/towerDone2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>

    <map name="Map" id="Map">
        <area v-if="!this.level.eighthLevelCompleted" href="#/derivativesimple" shape="poly" coords="623,537,666,553,677,579,671,607,625,623,584,605,573,573,595,546" />
        <area v-if="!this.level.ninethLevelCompleted && this.level.eighthLevelCompleted" href="#/derivativesimpleq2" shape="poly" coords="627,419,662,430,679,451,674,484,638,503,593,493,575,463,584,435,605,423" />
    </map>


    <div id="lifeDiv">
      <img v-if="life === 3" id="lifeImage" src="../assets/kokoro3.png" />
      <img v-if="life === 2" id="lifeImage" src="../assets/kokoro2.png" />
      <img v-if="life === 1" id="lifeImage" src="../assets/kokoro1.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map2',
  props: ['life', 'level'],
  mounted: function () {
    window.addEventListener('resize', this.windowonload())
  },
  methods:{
    // this method is responsible for recalculate the map image when the screen is resized
    windowonload() {
    var ImageMap = function (map, img) {
            var n,
            areas = map.getElementsByTagName('area'),
            len = areas.length,
            coords = [],
            previousWidth = 1380;
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
  width: 100%;
  height: 100%;
}
#lifeDiv{
  position: absolute;
  top: 0%;
  left: 88.9%;

}
</style>
