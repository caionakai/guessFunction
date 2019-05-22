<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.tenthLevel" src="../../assets/Map/insideTower.png" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.tenthLevel && !this.level.eleventhLevel" src="../../assets/Map/insideTowerD1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.eleventhLevel && !this.level.twelfthLevel" src="../../assets/Map/insideTowerD2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.twelfthLevel && !this.level.thirteenthLevel" src="../../assets/Map/insideTowerD3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.thirteenthLevel && !this.level.fourteenthLevel" src="../../assets/Map/insideTowerD4.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fourteenthLevel && !this.level.fifteenthLevel" src="../../assets/Map/insideTowerD5.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fifteenthLevel" src="../../assets/Map/insideTowerD6.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>

    <map name="Map" id="Map">
      <area v-if="this.level.ninethLevel && !this.level.tenthLevel" href="#/question4" shape="poly" coords="106,515,141,531,156,563,139,593,93,603,60,581,59,540,77,524" />
      <area v-if="this.level.tenthLevel && !this.level.eleventhLevel" href="#/question5" shape="poly" coords="309,519,348,532,361,561,346,593,296,606,264,582,260,550,276,530" />
      <area v-if="this.level.eleventhLevel && !this.level.twelfthLevel" href="#/deriq3" shape="poly" coords="548,519,585,534,598,569,579,599,549,608,514,599,498,576,501,547,521,527" />
      <area v-if="this.level.twelfthLevel && !this.level.thirteenthLevel" href="#/deriq4" shape="poly" coords="791,519,825,529,842,563,838,585,815,607,782,610,756,598,741,572,744,540,763,525" />
      <area v-if="this.level.thirteenthLevel && !this.level.fourteenthLevel" href="#/intq6" shape="poly" coords="1031,519,1074,542,1082,566,1069,593,1033,607,995,593,980,571,986,540,1004,525" />
      <area v-if="this.level.fourteenthLevel && !this.level.fifteenthLevel" href="#/intq7" shape="poly" coords="1265,513,1299,527,1314,552,1304,587,1264,604,1219,581,1211,547,1230,523" />
    </map>

    <div id="flecha">
      <a href="#/map2">
        <img src="../../assets/flech.gif"/>
      </a>
    </div>

    <div id="flecha2">
      <a href="#/map4">
        <img src="../../assets/flech.gif"/>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Map3',
  props: ['life', 'level'],
  mounted: function () {
    this.level = JSON.parse(localStorage.getItem("level"));
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
    position: fixed;
    top: 0px;
    left: 0px;
    background-position: 50% 50%;

}


#flecha{
  position: absolute;
  left: 2%;
  top: 30%;
  z-index: 1;
  transform: rotate(180deg);
}
#flecha2{
  position: absolute;
  right: 2%;
  top: 30%;
  z-index: 1;
  /* transform: rotate(-0deg); */
}
</style>
