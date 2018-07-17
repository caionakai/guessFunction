<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.firstLevelCompleted" src="../assets/teste2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.firstLevelCompleted && !this.level.secondLevelCompleted" src="../assets/done1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.secondLevelCompleted && !this.level.thirdLevelCompleted" src="../assets/done2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.thirdLevelCompleted && !this.level.fourthLevelCompleted" src="../assets/done3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fourthLevelCompleted && !this.level.fifthLevelCompleted" src="../assets/done4.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fifthLevelCompleted && !this.level.sixthLevelCompleted" src="../assets/done5.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.sixthLevelCompleted && !this.level.seventhLevelCompleted" src="../assets/done6.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.seventhLevelCompleted" src="../assets/done7.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>
    <map name="Map" id="Map">
      <area v-if="!this.level.firstLevelCompleted" href="#/seno" shape="poly" coords="67,67,89,74,102,81,108,96,111,111,107,129,99,145,81,155,54,152,38,143,28,127,25,106,27,89,45,74" />
      <area v-if="this.level.firstLevelCompleted && !this.level.secondLevelCompleted" href="#/cosseno" shape="poly" coords="231,149,244,152,252,158,260,165,266,173,269,186,267,197,264,207,257,221,250,225,241,227,229,227,216,223,206,212,200,204,196,194,199,182,201,171,207,158,216,153" />
      <area v-if="this.level.secondLevelCompleted && !this.level.thirdLevelCompleted" href="#/integralsimple" shape="poly" coords="278,321,296,324,307,334,314,343,319,357,318,367,314,378,309,388,300,391,289,395,277,395,264,392,253,385,247,375,243,364,242,353,245,344,252,332,261,323" />
      <area v-if="this.level.thirdLevelCompleted && !this.level.fourthLevelCompleted" href="#/integralsimpleradio" shape="poly" coords="361,459,379,464,395,474,402,485,404,496,405,510,401,523,393,537,379,543,366,547,351,547,339,543,326,534,322,525,319,512,319,497,322,484,329,474,342,463" />
      <area v-if="this.level.fourthLevelCompleted && !this.level.fifthLevelCompleted" href="#/identitytrigonometric" shape="poly" coords="528,348,546,354,554,366,560,378,559,393,551,404,534,411,517,411,504,398,498,383,503,363,513,352" />
      <area v-if="this.level.fifthLevelCompleted && !this.level.sixthLevelCompleted" href="#/integralundefined" shape="poly" coords="684,268,704,273,713,282,718,295,717,311,712,319,702,326,690,331,678,329,665,319,661,310,657,302,658,289,667,276" />
      <area v-if="this.level.sixthLevelCompleted && !this.level.seventhLevelCompleted" href="#/integraldefinite" shape="poly" coords="887,186,909,192,919,201,926,214,931,227,929,244,921,258,911,265,895,267,882,267,868,263,857,253,852,240,851,220,864,197" />
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
  name: 'Mapa',
  props: ['firstLevelCompleted', 'secondLevelCompleted', 'life', 'level'],
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
