<template>
  <div id="learn-topics">
    <div id="content">
        <h1 id="title">Semi Circunferência</h1>
        <div id="ggb-element"></div> 
        
        <a href="#/topics" id="button">
            <span>Voltar</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trigonometria',
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
    var ggbApp = new GGBApplet({"id": "ggbApplet","enableShiftDragZoom":false, "showAnimationButton":false, "appName": "classic", "width": 950, "height": 500, "showToolBar": false, "showAlgebraInput": false, "showMenuBar": false, "ggbBase64":"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" });
      window.addEventListener("load", function() { 
      ggbApp.inject('ggb-element');
    });
  },
}

</script>

<style scoped>
#ggb-element{
  margin-left: 20%;
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
