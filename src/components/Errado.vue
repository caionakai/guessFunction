<template>
  <div id="app">
    <img src="../assets/X.png"/>
  </div>
</template>

<script>
export default {
  name: "Errado",
  data: {
    count: 0
  },
  created() {
    this.count = 2;
    this.timeOver();
  },
  methods: {
    timeOver() {
      this.count -= 1;
      if (this.count > 0) {
        setTimeout(this.timeOver, 1000);
      } else {
        window.history.back();
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>