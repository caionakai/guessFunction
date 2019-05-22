<template>
  <div id="learn-topics">
    <div id="content">
        <h1 id="title">Visualizar Derivada</h1>
        <p>Após inserir a função mova o slide criado para visualizar a derivada de cada um dos pontos por onde ele 
            passa, clique em visualizar na janela à direita para observar a representação gráfica da função derivada.</p>
        <div id="ggb-element"></div>
        <a href="#/topics" id="button">
            <span>Voltar</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Limite',
    methods:{
    home(){
        this.$router.replace({name: "Topics"});
    },
    reloadPage() {
      if( window.localStorage ){
        if( !localStorage.getItem('firstLoad') )
        {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }  
        else
          localStorage.removeItem('firstLoad');
        }
    }
  },
  beforeMount(){
      this.reloadPage()
  },
  mounted() {
    var ggbApp = new GGBApplet({"id": "ggbApplet",
"width":1900,
"height":780,
"showMenuBar":true,
"showAlgebraInput":false,
"showToolBar":true,
"customToolBar":"0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
"showToolBarHelp":true,
"showResetIcon":false,
"enableLabelDrags":false,
"enableShiftDragZoom":true,
"enableRightClick":false,
"errorDialogsActive":false,
"useBrowserForJS":false,
"allowStyleBar":false,
"preventFocus":false,
"showZoomButtons":true,
"capturingThreshold":3,
// add code here to run when the applet starts
"appletOnLoad":function(api){ /* api.evalCommand('Segment((1,2),(3,4))');*/ },
"showFullscreenButton":true,
"scale":1,
"disableAutoScale":false,
"allowUpscale":false,
"clickToLoad":false,
"appName":"classic",
"showSuggestionButtons":true,
"buttonRounding":0.7,
"buttonShadows":false,
"language":"en", "ggbBase64":"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" });
      window.addEventListener("load", function() { 
      ggbApp.inject('ggb-element');
    });
  },
}

</script>

<style scoped>
#ggb-element{
  margin-left: 5%;
}

#content{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: aquamarine; /* Just to visualize the extent */
}

#title{
    font-family: 'M PLUS Rounded 1c', sans-serif;
}

#button {
    display: inline-block;
    margin-top: 3%;
    /* margin-bottom: 10%; */
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow:    0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
    -moz-box-shadow: 0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
    box-shadow: 0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
    -webkit-transition: -webkit-box-shadow .1s ease-in-out;
    -moz-transition: -moz-box-shadow .1s ease-in-out;
    -o-transition: -o-box-shadow .1s ease-in-out;
    transition: box-shadow .1s ease-in-out;
    font-size: 25px;
    color: #fff;
}
#button span {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4286f4;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
    -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
    font-family: 'Pacifico', Arial, sans-serif;
    line-height: 1;
    text-shadow: 0 -1px 1px rgba(175, 49, 95, .7);
    -webkit-transition: background-color .2s ease-in-out, -webkit-transform .1s ease-in-out;
    -moz-transition: background-color .2s ease-in-out, -moz-transform .1s ease-in-out;
    -o-transition: background-color .2s ease-in-out, -o-transform .1s ease-in-out;
    transition: background-color .2s ease-in-out, transform .1s ease-in-out;
    font-family: 'M PLUS Rounded 1c', sans-serif;
}

#button:hover span {
    background-color: #4286f4;
    text-shadow: 0 -1px 1px rgba(175, 49, 95, .9), 0 0 5px rgba(255, 255, 255, .8);
}
#button:active, #button:focus {
    -webkit-box-shadow:    0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
    -moz-box-shadow: 0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
    box-shadow:    0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
}

#button:active span {
    -webkit-transform: translate(0, 4px);
    -moz-transform: translate(0, 4px);
    -o-transform: translate(0, 4px);
    transform: translate(0, 4px);
}
p{
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
</style>
