<template>
  <div id="app">
    <img src="../../assets/logo_pibiti.png" />
  </div>
</template>

<script>
export default {
  name: 'Logos',
  data:{
    counter: 5
  },
  created() {
    this.counter = 5;
    this.timeOver();
  },

  methods:{
    timeOver(){
      this.counter -= 1;
      if(this.counter > 0 ){
        setTimeout(this.timeOver, 1000);
        // console.log(this.counter);
      }else{
        this.$router.replace({ name: "Intro" });
      }
    },
  }
}

</script>

<style>
h1, p, h2, h3, h4{
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
