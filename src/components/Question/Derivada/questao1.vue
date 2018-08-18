<template>
<div>
  <div id="main">
    <div id="body">
        <h1>Derivadas</h1>
        <h2>Taxa de Variação, Coeficiente Angular e Variação de uma função não linear.</h2>
        <video width="30%" height="15%" controls>
            <source src="../../../assets/Videos/video1.mp4" type="video/mp4">
            Há algum problema com o vídeo, utilize outro navegador!
        </video>  

        <br/>
        <!-- <iframe width="796" height="448" src="https://www.youtube.com/embed/EKvHQc3QEow" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->

        <h2>Derivada como o coeficiente angular de uma reta tangente.</h2>
        <video width="30%" height="15%" controls>
          <source src="../../../assets/Videos/video1-2.mp4" type="video/mp4">
          Há algum problema com o vídeo, utilize outro navegador!
        </video>

        <br/>
        <button id="buttonBack" @click="goMap()"> Voltar ao Mapa</button>
        <button id="button" @click="goToPage()"> Fazer exercício</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "DerivQ1",
  mounted() {
  },
  data() {
    return {
    };
  },
  methods: {
      goToPage(){
        this.$router.replace({ name: "DerivQ1Ex" });
      },
      goMap(){
        this.$router.replace({ name: "Map" });        
      }
  }
};
</script>

<style scoped>
#body{
  margin: auto;
  width: 83%;
  min-height: 120%;
  padding: 1.5%;
  border-radius: 5%;
  background-color: white;
  margin-top: 2%;
}
#buttonBack {
  background-color: gray;
  padding: 0.5%;
  border: none;
  border-radius: 5%;
  font-size: 120%;
  color: #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  cursor: pointer;
}
button{
    /* float: right; */
    margin-top: 2%;
    background-color: #1357c4;
    padding: 0.5%;
    border: none;
    border-radius: 5%;
    font-size: 120%;
    color: #fff;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    cursor: pointer;
}
h1, h2{
    /* font-family: "Comic Sans MS", cursive, sans-serif; */
    font-family: 'M PLUS Rounded 1c', sans-serif;

}
#main{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: rgb(37, 134, 224);
}

</style>
