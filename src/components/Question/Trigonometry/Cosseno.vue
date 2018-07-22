<template>
  <div id="origin">
      <div class="tile is-parent is-4">
        <h4 class="title">Qual função representa o gráfico a seguir?</h4>
        <div ref="cosseno"></div>
      </div>

      <p>
        <label id="a" for="inputA">a)</label>
        <input type="radio" id='inputA' name="quest" value="a" v-model="selected">
        <label for="inputA">
          Seno
        </label>
      </p>
      <p>
        <label id="b" for="inputB">b)</label>
        <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
        <label for='inputB'>
          Cosseno
        </label>
      </p>


        <p>
          <label id="c" for="inputC">c)</label>
          <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
          <label for="inputC">
            Tangente
          </label>
        </p>

        <p>
          <label id="d" for="inputD">d)</label>
          <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
          <label for="inputD">
            Secante
          </label>
        </p>
        
        <button id="button" @click="checkForm()"> Confirmar</button>
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
    Plotly.plot(this.$refs.cosseno, [{
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
      rows: [],
      selected: null,
    }
  },
  methods: {
    verify(dado){
      if(dado == 'cosseno'){
        this.$router.replace({ name: "Certo", params:{id: 'cosseno'} });
      }else{
        this.$router.replace({ name: "Errado",  params:{id: 'cosseno'} });
      }
    },
    checkForm(){
      if(this.selected === 'b'){
          this.$router.replace({name:'Certo', params:{id:'cosseno'}});
      }else{
          this.$router.replace({name:'Errado'});
      }
    }
  }
}
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}

#a{
  margin-left: -2.5%;;
}
#button{
    display: inline-block;
    margin-top: 3%;
    background-color: #3aff47;
    padding: 5px 20px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
    color: #fff;
    font-family: "Comic Sans MS", cursive, sans-serif;
    cursor: pointer;
}
</style>
