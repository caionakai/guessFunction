<template>
<div>
  <div id="main">
    <div id="body">
        <h1>Derivadas</h1>
        <h2>Derivada pela definição.</h2>
        <video width="30%" height="15%" controls>
            <source src="../../../../assets/Videos/deriv-Q2.ogg" type="video/mp4">
            Há algum problema com o vídeo, utilize outro navegador!
        </video>  


        <br/>


        <br/>
        <button id="buttonBack" @click="goMap()"> Voltar ao Mapa</button>
        <button id="button" @click="goToPage()"> Fazer exercício</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "DerivQ2",
  mounted() {
  },
  data() {
    return {
    };
  },
  methods: {
      goToPage(){
        this.$router.push({ name: "DerivQ2Ex1" });
      },
      goMap(){
        this.$router.push({ name: "Map" });        
      }
  }
};
</script>

<style scoped>
#body{
  margin: auto;
  width: 83%;
  min-height: 85%;
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
