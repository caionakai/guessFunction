<template>
  <div id="app">
    <button id="buttonLogin" type="button" v-on:click="login()">Play!</button>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods:{
    login() {
        this.$router.replace({ name: "Seno" });
    },
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
