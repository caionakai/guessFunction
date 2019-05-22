<template>
  <div id="app">
  
    <!-- this div is needed to define full screen background color -->
    <div id="content">
      <h1 id="title">Cálculo Divertido</h1>
      <div id="panelButton">
        <a  href="#/map" class="button">
            <span>Jogar</span>
        </a>
        <a href="#/howtoplay" class="button">
            <span>Como jogar</span>
        </a>
        <!-- <a href="#/topics" class="button">
            <span>Simulações</span>
        </a> -->
        <a href="#/info" class="button">
            <span>Informações</span>
        </a>
      </div>
      <div id="fb-root"></div>
      <p>Compartilhe no facebook</p>
      <!-- <div class="fb-share-button" 
           data-href="https://caionakai.github.io" 
           data-layout="button"
           data-size="large"
      >
      </div> -->
      <div class="fb-share-button" 
           data-href="https://caionakai.github.io" 
           data-layout="button" data-size="large" 
           data-mobile-iframe="true">
        <a target="_blank" 
           href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcaionakai.github.io%2F&amp;src=sdkpreparse"
           class="shareBtn"
           ><span>
             <i class="fab fa-facebook-square"></i>
             Compartilhar
            </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  created() {
    this.eventUpdate();
    this.resetAllLevels();
    this.face(document, 'script', 'facebook-jssdk');
  },
  mounted(){

  },
  data(){
    return{
      a: 'facebook-jssdk',
    }
  },
  methods:{ 
    eventUpdate(){
      this.$emit('resetSomador');
    },
    resetAllLevels(){
      this.$emit('resetAllLevels');
    },
    
    face(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
}

</script>

<style scoped>
#content {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: aquamarine; /* Just to visualize the extent */
}
#panelButton{
  margin: auto;
  width: 20%;
  height: 50%;
  border: 3px solid blue;
  border-radius: 10%;
  padding: 10px;
  margin-top: 0%;
}


#title{
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

.button {
  width: 100%;
  margin: 0 auto;
  display: block;
  vertical-align: middle;
  margin-left: 25% auto;
  margin-top: 10%;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: 0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
  -moz-box-shadow: 0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
  box-shadow: 0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
  -webkit-transition: -webkit-box-shadow .1s ease-in-out;
  -moz-transition: -moz-box-shadow .1s ease-in-out;
  -o-transition: -o-box-shadow .1s ease-in-out;
  transition: box-shadow .1s ease-in-out;
  font-size: 25px;
  color: #fff;
}

.button span {
  width: 100%;
  display: inline-block;
  padding: 2.8% 0%;
  background-color: #4286f4;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
  -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
  line-height: 1;
  text-shadow: 0 -1px 1px rgba(175, 49, 95, .7);
  -webkit-transition: background-color .2s ease-in-out, -webkit-transform .1s ease-in-out;
  -moz-transition: background-color .2s ease-in-out, -moz-transform .1s ease-in-out;
  -o-transition: background-color .2s ease-in-out, -o-transform .1s ease-in-out;
  transition: background-color .2s ease-in-out, transform .1s ease-in-out;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

.button:hover span {
  width: 100%;
  background-color: #4286f4;
  text-shadow: 0 -1px 1px rgba(175, 49, 95, .9), 0 0 5px rgba(255, 255, 255, .8);
}
.button:active, #button:focus {
  width: 100%;
  -webkit-box-shadow:    0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
  -moz-box-shadow: 0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
  box-shadow:    0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
}

.button:active span {
  width: 100%;
  -webkit-transform: translate(0, 4px);
  -moz-transform: translate(0, 4px);
  -o-transform: translate(0, 4px);
  transform: translate(0, 4px);
}
p{
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
.shareBtn {
  width: 50px;
  font-size: 13px;
  color: #fff;
}
.shareBtn span{
  display: inline-block;
  padding: 6px 12px;
  border-radius: 3px;
  background-color: #0c4baf;
  font: bolder;

}

</style>
