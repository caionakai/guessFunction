<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.first" src="../../assets/map1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.first && !this.level.second" src="../../assets/done1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.second && !this.level.third" src="../../assets/done2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.third && !this.level.fourth" src="../../assets/done3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fourth && !this.level.fifth" src="../../assets/done4.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fifth && !this.level.sixth" src="../../assets/done5.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.sixth && !this.level.seventhLevel" src="../../assets/done6.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.seventh" src="../../assets/done7.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>
    <map name="Map" id="Map">
      <!-- v-if="!this.level.firstLevel" firstLevel -->
      <area  href="#/deriv-q1" shape="poly" coords="126,77,106,81,90,92,79,108,75,128,79,148,90,164,106,175,126,179,146,175,162,164,173,148,177,128,173,108,162,92,146,81" />
      <area v-if="this.level.first" href="#/deriv-q2" shape="poly" coords="349,174,343,172,385,189,397,223,383,248,354,263,320,253,304,234,299,210,311,192,329,177" />
      <area v-if="this.level.second" href="#/deriv-q4" shape="poly" coords="409,365,408,364,444,379,459,405,448,434,416,448,385,442,367,425,363,397,374,378,391,366" />
      <area v-if="this.level.third" href="#/deriv-q3" shape="poly" coords="521,520,521,519,560,537,576,568,569,595,542,614,513,617,485,607,465,586,469,558,480,539,499,526" />
      <area v-if="this.level.fourth" href="#/deriv-q5" shape="poly" coords="743,394,744,394,773,403,788,428,784,450,762,465,725,463,703,443,704,421,720,401" />
      <area v-if="this.level.fifth" href="#/deriv-q6" shape="poly" coords="957,305,955,306,992,323,996,356,970,374,933,368,917,345,928,314" />
      <area v-if="this.level.sixth && !this.level.seventh" href="#/integraldefinite" shape="poly" coords="1229,215,1229,214,1268,233,1280,270,1253,300,1210,302,1179,274,1183,239,1205,221" />
    </map>
    <div id="flecha" class="asd">
      <a href="#/map2">
        <img src="../../assets/flech.gif"/>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Map",
  props: ["level"],
  data(){
    return {
      k:''
    }
  },
  beforeCreate(){
    // Coloca na variável level o dado que está no localStorage4
    //console.log("KKKK")
    // this.level = JSON.parse(localStorage.getItem("level"));


    //this.nivel.first = true;
  },
  mounted() {
    this.windowonload();
    this.level = JSON.parse(localStorage.getItem("level"));
    //console.log(this.k.second)
    //console.log("oi")    
    // window.screen.lockOrientation("landscape");
    screen.orientation.lock('landscape');
  },
  methods: {
    // this method is responsible for recalculate the map image when the screen is resized
    windowonload() {
      var ImageMap = function(map, img) {
          var n,
            areas = map.getElementsByTagName("area"),
            len = areas.length,
            coords = [],
            previousWidth = 1380;
          for (n = 0; n < len; n++) {
            coords[n] = areas[n].coords.split(",");
          }
          this.resize = function() {
            var n,
              m,
              clen,
              x = img.offsetWidth / previousWidth;
            for (n = 0; n < len; n++) {
              clen = coords[n].length;
              for (m = 0; m < clen; m++) {
                coords[n][m] *= x;
              }
              areas[n].coords = coords[n].join(",");
            }
            previousWidth = img.offsetWidth;
            return true;
          };
          window.onresize = this.resize;
        },
        imageMap = new ImageMap(
          document.getElementById("Map"),
          document.getElementById("trilha")
        );
      imageMap.resize();
      return;
    },
  }
};
</script>

<style scoped>
#trilha {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-position: 50% 50%;
}

#flecha {
  position: absolute;
  right: 0%;
  top: 10%;
  transform: scale(0.7);
  z-index: 1;
  /* transform: rotate(90deg); */
}
</style>
