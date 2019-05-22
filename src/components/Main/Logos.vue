<template>
  <div id="app">
    <img src="../../assets/logo_pibiti.png" />
  </div>
</template>

<script>
export default {
  name: 'Logos',
  mounted(){ 
    console.log("kk")

    try{
      this.test = JSON.parse(localStorage.getItem("level"));
    }catch(exception){
      localStorage.setItem('level', JSON.stringify(this.data));
    }
    // if(this.test == null || this.test == "undefined"){

    // }
  },
  data(){
      return{
        counter: 5,
        data: {
          first: false,
          second: false,
          third: false,
          fourth: false,
          fifth: false,
          // ... others like third, fourth.. is defined directly 
       },
       test: 'temp'
    }
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

<style scoped>
h1, p, h2, h3, h4{
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
