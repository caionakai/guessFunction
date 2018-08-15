<template>
  <div id="app">
    <img src="../../assets/logo_pibiti.png" />
  </div>
</template>

<script>
export default {
  name: 'Logos',
  mounted(){
    this.test = JSON.parse(localStorage.getItem("level"));
    if(this.test == null){
      localStorage.setItem('level', JSON.stringify(this.data));
    }
  },
  data(){
      return{
        counter: 5,
        data: {
          first: false,
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
