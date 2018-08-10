<template>
  <div id="mapa">
    <div style="width:100%;">
      <img v-if="!this.level.firstLevel" src="../../assets/map1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.firstLevel && !this.level.secondLevel" src="../../assets/done1.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.secondLevel && !this.level.thirdLevel" src="../../assets/done2.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.thirdLevel && !this.level.fourthLevel" src="../../assets/done3.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fourthLevel && !this.level.fifthLevel" src="../../assets/done4.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.fifthLevel && !this.level.sixthLevel" src="../../assets/done5.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.sixthLevel && !this.level.seventhLevel" src="../../assets/done6.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
      <img v-if="this.level.seventhLevel" src="../../assets/done7.png" alt="" id="trilha" usemap="#Map" border="0" width="100%"/>
    </div>
    <map name="Map" id="Map">
      <area v-if="!this.level.firstLevel" href="#/firstLevel" shape="poly" coords="126,77,106,81,90,92,79,108,75,128,79,148,90,164,106,175,126,179,146,175,162,164,173,148,177,128,173,108,162,92,146,81" />
      <area v-if="this.level.firstLevel && !this.level.secondLevel" href="#/cosseno" shape="poly" coords="349,174,343,172,385,189,397,223,383,248,354,263,320,253,304,234,299,210,311,192,329,177" />
      <area v-if="this.level.secondLevel && !this.level.thirdLevel" href="#/integralsimple" shape="poly" coords="409,365,408,364,444,379,459,405,448,434,416,448,385,442,367,425,363,397,374,378,391,366" />
      <area v-if="this.level.thirdLevel && !this.level.fourthLevel" href="#/integralsimpleradio" shape="poly" coords="521,520,521,519,560,537,576,568,569,595,542,614,513,617,485,607,465,586,469,558,480,539,499,526" />
      <area v-if="this.level.fourthLevel && !this.level.fifthLevel" href="#/identitytrigonometric" shape="poly" coords="743,394,744,394,773,403,788,428,784,450,762,465,725,463,703,443,704,421,720,401" />
      <area v-if="this.level.fifthLevel && !this.level.sixthLevel" href="#/integralundefined" shape="poly" coords="957,305,955,306,992,323,996,356,970,374,933,368,917,345,928,314" />
      <area v-if="this.level.sixthLevel && !this.level.seventhLevel" href="#/integraldefinite" shape="poly" coords="1229,215,1229,214,1268,233,1280,270,1253,300,1210,302,1179,274,1183,239,1205,221" />
    </map>
    <div id="flecha" class="asd">
      <a href="#/map2">
        <img src="../../assets/flecha.gif"/>
      </a>
    </div>
    <div id="flecha">
      <button @click='oi()' >
        Ola
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "Mapa",
  props: ["level"],
  mounted() {
    this.windowonload();
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

    oi(ev){
      console.log(this.$('.asd'))
    }
  }
};
</script>

<style scoped>
#trilha {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-position: 50% 50%;
}

#flecha {
  position: absolute;
  right: 5%;
  top: 1%;
  z-index: 1;
  transform: rotate(-90deg);
}
</style>
