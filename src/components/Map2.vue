<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.eighthLevelCompleted" src="../assets/Map/tower.png" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.eighthLevelCompleted && !this.level.ninethLevelCompleted" src="../assets/Map/towerDone1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.ninethLevelCompleted" src="../assets/Map/towerDone2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>

    <map name="Map" id="Map">
        <area v-if="!this.level.eighthLevelCompleted" href="#/derivativesimple" shape="poly" coords="462,448,483,454,497,469,500,485,497,500,489,510,480,519,466,522,446,515,437,505,430,494,430,479,432,466,444,452" />
        <area v-if="!this.level.ninethLevelCompleted" href="#/derivativesimpleq2" shape="poly" coords="465,348,486,355,496,364,501,375,501,388,498,403,489,411,478,418,463,421,448,414,438,406,432,396,431,383,431,373,436,361,449,351" />
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
  width: 100%;
  height: 100%;
}
#lifeDiv{
  position: absolute;
  top: 0%;
  left: 88.9%;

}
</style>
