<template>
  <div id="app">
    <button id="gameStart" type="button" v-on:click="jogar()">Play!</button>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  created() {
    this.eventUpdate();
    this.resetAllLevels();
  },
  methods:{
    jogar() {
        this.$router.replace({ name: "Map" });
    },   
    eventUpdate(){
      this.$emit('resetSomador');
    },
    resetAllLevels(){
      this.$emit('resetAllLevels');
    }
  }
}

</script>

<style scoped>
#app {
	height: 100%;
	width: 100%;
	background-color: #4889f2;
	position: absolute;
  text-align: center;
  left: 0;
	top: 0;
  display: flex;
	align-items: center;
	justify-content: center;
}

#gameStart{
  border-radius: 20px;
  color: white;
  background-color: #4CAF50;
  border-style: outset;
  padding: 11px 30px;
  font-family: 'Gaegu', cursive;
  border-width: 2px;
  font-size: 30px;
  outline: none;

}
#gameStart:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,1,0.2);
}

</style>
