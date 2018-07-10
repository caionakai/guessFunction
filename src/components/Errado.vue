<template>
  <div id="app">
    <img src="../assets/X.png"/>
  </div>
</template>

<script>
export default {
  name: 'Errado',
  data:{
    count: 0
  },
  created() {
    this.count = 2;
    this.timeOver();
  },
  props:['life'],
  methods:{
    decrementLife(){
      this.$emit('decrementLife');
    },
    timeOver(){
      this.count -= 1;
      if(this.count > 0){
        setTimeout(this.timeOver, 1000);
      }else{
        this.life -= 1;
        this.decrementLife();
        if(this.life === 0){
          this.$router.replace({name: 'GameOver'});
        }else{
          this.$router.replace({name: 'Map'});
        }
      }
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>