<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.firstLevelCompleted" src="../assets/map1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.firstLevelCompleted && !this.level.secondLevelCompleted" src="../assets/done1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.secondLevelCompleted && !this.level.thirdLevelCompleted" src="../assets/done2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.thirdLevelCompleted && !this.level.fourthLevelCompleted" src="../assets/done3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fourthLevelCompleted && !this.level.fifthLevelCompleted" src="../assets/done4.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fifthLevelCompleted && !this.level.sixthLevelCompleted" src="../assets/done5.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.sixthLevelCompleted && !this.level.seventhLevelCompleted" src="../assets/done6.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.seventhLevelCompleted" src="../assets/done7.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>
    <map name="Map" id="Map">
      <area v-if="!this.level.firstLevelCompleted" href="#/seno" shape="poly" coords="126,77,106,81,90,92,79,108,75,128,79,148,90,164,106,175,126,179,146,175,162,164,173,148,177,128,173,108,162,92,146,81" />
      <area v-if="this.level.firstLevelCompleted && !this.level.secondLevelCompleted" href="#/cosseno" shape="poly" coords="349,174,343,172,385,189,397,223,383,248,354,263,320,253,304,234,299,210,311,192,329,177" />
      <area v-if="this.level.secondLevelCompleted && !this.level.thirdLevelCompleted" href="#/integralsimple" shape="poly" coords="409,365,408,364,444,379,459,405,448,434,416,448,385,442,367,425,363,397,374,378,391,366" />
      <area v-if="this.level.thirdLevelCompleted && !this.level.fourthLevelCompleted" href="#/integralsimpleradio" shape="poly" coords="521,520,521,519,560,537,576,568,569,595,542,614,513,617,485,607,465,586,469,558,480,539,499,526" />
      <area v-if="this.level.fourthLevelCompleted && !this.level.fifthLevelCompleted" href="#/identitytrigonometric" shape="poly" coords="743,394,744,394,773,403,788,428,784,450,762,465,725,463,703,443,704,421,720,401" />
      <area v-if="this.level.fifthLevelCompleted && !this.level.sixthLevelCompleted" href="#/integralundefined" shape="poly" coords="957,305,955,306,992,323,996,356,970,374,933,368,917,345,928,314" />
      <area v-if="this.level.sixthLevelCompleted && !this.level.seventhLevelCompleted" href="#/integraldefinite" shape="poly" coords="1229,215,1229,214,1268,233,1280,270,1253,300,1210,302,1179,274,1183,239,1205,221" />
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
  props: ['life', 'level'],
  mounted(){
    this.windowonload();
  },
  methods:{
    // this method is responsible for recalculate the map image when the screen is resized
    windowonload() {
    var ImageMap = function (map, img) {
            var n,
            areas = map.getElementsByTagName('area'),
            len = areas.length,
            coords = [],
            previousWidth = 1365;
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
