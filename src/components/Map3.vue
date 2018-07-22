<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.tenthLevelCompleted" src="../assets/Map/insideTower.png" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.tenthLevelCompleted && !this.level.eleventhLevelCompleted" src="../assets/Map/insideTowerD1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.eleventhLevelCompleted && !this.level.twelfthLevelCompleted" src="../assets/Map/insideTowerD2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.twelfthLevelCompleted && !this.level.thirteenthLevelCompleted" src="../assets/Map/insideTowerD3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.thirteenthLevelCompleted && !this.level.fourteenthLevelCompleted" src="../assets/Map/insideTowerD4.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fourteenthLevelCompleted && !this.level.fifteenthLevelCompleted" src="../assets/Map/insideTowerD5.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fifteenthLevelCompleted" src="../assets/Map/insideTowerD6.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>

    <map name="Map" id="Map">
      <area alt="" title="" href="#" shape="poly" coords="72,426,93,432,104,445,112,465,105,489,90,504,68,505,43,487,36,464,42,444,57,429" />
      <area alt="" title="" href="#" shape="poly" coords="220,429,244,438,257,458,257,478,248,495,230,509,209,506,190,490,184,471,189,448,201,434" />
      <area alt="" title="" href="#" shape="poly" coords="391,428,414,437,421,455,426,472,419,493,405,506,382,510,361,500,353,480,354,456,363,440" />
      <area alt="" title="" href="#" shape="poly" coords="562,431,587,441,598,463,594,491,572,508,548,505,532,491,524,472,530,451,542,436" />
      <area alt="" title="" href="#" shape="poly" coords="731,427,758,437,770,458,768,480,760,495,745,507,725,508,706,493,696,473,699,448,715,434" />
      <area alt="" title="" href="#" shape="poly" coords="896,424,920,433,934,454,932,472,924,493,904,502,880,497,865,485,860,466,864,445,880,429" />
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
  name: 'Map3',
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
