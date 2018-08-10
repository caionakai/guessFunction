<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.sixteenthLevel" src="../../assets/Map/map4.png" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.sixteenthLevel && !this.level.seventeenthLevel" src="../../assets/Map/owariD1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.seventeenthLevel && !this.level.eighteenthLevel" src="../../assets/Map/owariD2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.eighteenthLevel" src="../../assets/Map/owariD3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>

    <map name="Map" id="Map">
      <area v-if="this.level.fifteenthLevel && !this.level.sixteenthLevel" href="#/limq1" shape="poly" coords="166,497,204,510,218,539,203,575,157,586,123,564,119,529,139,504" />
      <area v-if="this.level.sixteenthLevel && !this.level.seventeenthLevel" href="#" shape="poly" coords="455,496,500,520,505,557,468,584,423,576,405,542,421,505" />
      <area v-if="this.level.seventeenthLevel && !this.level.eighteenthLevel" href="#" shape="poly" coords="725,498,772,521,779,558,753,585,726,591,693,578,679,556,681,528,702,506" />
    </map>
      
    
    <div id="flecha">
      <a href="#/map3">
        <img src="../../assets/flecha.gif"/>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Map4',
  props: ['level'],
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

#flecha{
  position: absolute;
  left: 2%;
  top: 30%;
  z-index: 1;
  transform: rotate(90deg);
}
</style>
