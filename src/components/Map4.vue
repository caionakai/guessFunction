<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.sixteenthLevelCompleted" src="../assets/Map/map4.png" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.sixteenthLevelCompleted && !this.level.seventeenthLevelCompleted" src="../assets/Map/owariD1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.seventeenthLevelCompleted && !this.level.eighteenthLevelCompleted" src="../assets/Map/owariD2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.eighteenthLevelCompleted" src="../assets/Map/owariD3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>

    <map name="Map" id="Map">
      <area v-if="!this.level.sixteenthLevelCompleted" href="#/limq1" shape="poly" coords="166,497,204,510,218,539,203,575,157,586,123,564,119,529,139,504" />
      <area v-if="this.level.sixteenthLevelCompleted && !this.level.seventeenthLevelCompleted" href="#" shape="poly" coords="455,496,500,520,505,557,468,584,423,576,405,542,421,505" />
      <area v-if="this.level.seventeenthLevelCompleted && !this.level.eighteenthLevelCompleted" href="#" shape="poly" coords="725,498,772,521,779,558,753,585,726,591,693,578,679,556,681,528,702,506" />
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
