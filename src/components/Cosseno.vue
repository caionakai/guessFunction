<template>
  <div id="origin">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h4 class="title">Guess the function below!</h4>
          <div ref="seno"></div>
        </article>
      </div>
      <div class="btn-group">
        <button v-on:click="verify('seno')" class="buttonOption">Seno</button>
        <button v-on:click="verify('cosseno')" class="buttonOption">Cosseno</button>
        <button v-on:click="verify('tangente')" class="buttonOption">Tangente</button>
      </div>
  </div>
</template>

<script>
import Plotly from 'plotly.js'
export default {
  name: 'Cosseno',
  mounted () {
    var frames = [
        {name: 'sine', data: [{x: [], y: []}]}
    ];
    var n = 100;
    for (var i = 0; i < n; i++) {
        var t = i / (n - 1) * 2 - 1;
        // A cosine wave:
        frames[0].data[0].x[i] = t * Math.PI;
        frames[0].data[0].y[i] = Math.cos(t * Math.PI)
    }
    Plotly.plot(this.$refs.seno, [{
        x: frames[0].data[0].x,
        y: frames[0].data[0].y
        }], 
        {
            margin: { t: 0 }
        }
    );
  },
  data () {
    return {
      rows: []
    }
  },
  methods: {
    verify(dado){
      if(dado == 'cosseno'){
        this.$router.replace({ name: "Certo", params:{id: 'cosseno'} });
      }else{
        this.$router.replace({ name: "Errado",  params:{id: 'cosseno'} });
      }
    }
  }
}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}
.buttonOption{
    margin-top: 5%;
    border-radius: 10px;
    margin-left: 13%;
    height: 40px;
    width: 70px;
    color: #ffffff;
    background: #436cad;
    outline: none;
}

.btn-group{
    margin-left: 1%;
}

</style>
