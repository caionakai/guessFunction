<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.sixteenthLevelCompleted" src="../assets/Map/map4.png" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.sixteenthLevelCompleted && !this.level.seventeenthLevelCompleted" src="../assets/Map/owariD1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.seventeenthLevelCompleted && !this.level.eighteenthLevelCompleted" src="../assets/Map/owariD2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.eighteenthLevelCompleted" src="../assets/Map/owariD3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>

    <map name="Map" id="Map">
      <area v-if="!this.level.sixteenthLevelCompleted" href="#" shape="poly" coords="106,515,141,531,156,563,139,593,93,603,60,581,59,540,77,524" />
      <area v-if="this.level.sixteenthLevelCompleted && !this.level.seventeenthLevelCompleted" href="#" shape="poly" coords="309,519,348,532,361,561,346,593,296,606,264,582,260,550,276,530" />
      <area v-if="this.level.seventeenthLevelCompleted && !this.level.eighteenthLevelCompleted" href="#" shape="poly" coords="548,519,585,534,598,569,579,599,549,608,514,599,498,576,501,547,521,527" />
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
  name: 'Map4',
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
