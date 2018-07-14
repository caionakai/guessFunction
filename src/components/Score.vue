<template>
  <div id="app">
    <h1>Sua pontuação foi {{pontuacao}}/7</h1>
    <button @click="goIntro()">Jogar Novamente!</button>
  </div>
</template>

<script>
export default {
  name: 'Score',
  props: ['pontuacao'],
  methods: {
    goIntro(){
        this.$router.replace({name: 'Intro'})
    }
  }

}

</script>

<style scoped>

</style>
