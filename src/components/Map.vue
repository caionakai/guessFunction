<template>
  <div id="mapa">
    <div style="width:100%;">
      <img src="../assets/teste2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>
    <map name="Map" id="Map">
      <area href="#/seno" shape="poly" coords="67,67,89,74,102,81,108,96,111,111,107,129,99,145,81,155,54,152,38,143,28,127,25,106,27,89,45,74" />
      <area href="#/cosseno" shape="poly" coords="230,149,255,160,263,171,268,185,266,206,251,222,236,230,211,225,199,207,194,186,204,166,212,154" />
      <area href="#/integralsimple" shape="poly" coords="277,320,307,333,315,351,319,369,312,378,300,388,279,396,259,392,246,378,241,362,243,346,256,328" />
      <area href="#/integralsimpleradio" shape="poly" coords="363,460,389,471,401,488,403,510,400,526,388,539,376,545,354,550,335,542,324,527,320,510,320,495,327,478,342,464" />
      <area href="#" shape="poly" coords="528,348,546,354,554,366,560,378,559,393,551,404,534,411,517,411,504,398,498,383,503,363,513,352" />
      <area href="#" shape="poly" coords="684,268,704,273,713,282,718,295,717,311,712,319,702,326,690,331,678,329,665,319,661,310,657,302,658,289,667,276" />
      <area href="#" shape="poly" coords="887,186,909,192,919,201,926,214,931,227,929,244,921,258,911,265,895,267,882,267,868,263,857,253,852,240,851,220,864,197" />
    </map>


    <div v-if="this.level.firstLevelCompleted" id="level1Done">
      <img src="../assets/done.png" />
    </div>
    
    <div v-if="this.level.secondLevelCompleted" id="level2Done">
      <img src="../assets/done.png" />
    </div>

    <div v-if="this.level.thirdLevelCompleted" id="level3Done">
      <img src="../assets/done.png" />
    </div>

    <div v-if="this.level.fourthLevelCompleted" id="level4Done">
      <img src="../assets/done.png" />
    </div>
    
    <div v-if="this.level.fifthLevelCompleted" id="level5Done">
      <img src="../assets/done.png" />
    </div>
    
    <div v-if="this.level.sixthLevelCompleted" id="level6Done">
      <img src="../assets/done.png" />
    </div>
        
    <div v-if="this.level.seventhLevelCompleted" id="level7Done">
      <img src="../assets/done.png" />
    </div>
    <!-- <div id="arrowWin">
      <img id="arrowWinImage" src="../assets/arrow.gif" />
    </div>

    <div id="treasureDiv">
      <img id="treasureImage" src="../assets/treasure.png" />
    </div> -->

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
  props: ['firstLevelCompleted', 'secondLevelCompleted', 'life', 'level'],
  mounted(){
    this.windowonload();
  },
  methods:{
    windowonload() {
    var ImageMap = function (map, img) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 128;
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
        imageMap = new ImageMap(document.getElementById('oi'), document.getElementById('trilha'));
    imageMap.resize();
    return;
}
  }
}

</script>

<style scoped>
#level1Done{
  position: absolute;
  width: 10%;
  height: 18%;
  left: 1.7%;
  top: 8.9%;
}
#level2Done{
  position: absolute;
  width: 9%;
  height: 14%;
  left: 18.7%;
  top: 23.9%;
}
#level3Done{
  position: absolute;
  width: 1%;
  height: 1%;
  left: 23.7%;
  top: 52.9%;
}
#level4Done{
  position: absolute;
  width: 1%;
  height: 1%;
  left: 32%;
  top: 76.9%;
}
#level5Done{
  position: absolute;
  width: -4%;
  height: -4%;
  left: 49.1%;
  top: 55.9%;
}
#level6Done{
  position: absolute;
  width: -4%;
  height: -4%;
  left: 65.1%;
  top: 42.9%;
}
#level7Done{
  position: absolute;
  width: -4%;
  height: -4%;
  left: 85.5%;
  top: 29.9%;
}


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
  width: 200%;
  height: 200%;
}
#lifeDiv{
  position: absolute;
  top: 0%;
  left: 88.9%;

}
</style>
