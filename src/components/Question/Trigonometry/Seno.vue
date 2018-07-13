<template>
  <div id="origin">
      <div class="seno">
        <h4 class="title">{{msg}}</h4>
        <div id="plot" ref="seno"></div>
      </div>

      <p>
            <label id="a" for="a">a)</label>
            <input type="radio" name="quest" value="a" v-model="selected">
            <label>
              Seno
            </label>
        </p>
        <p>
            <label id="b" for="b">b)</label>
            <input type="radio" value="b" name="quest" v-model="selected">
            <label>
              Cosseno
            </label>
        </p>


        <p>
            <label id="c" for="c">c)</label>
            <input type="radio" value="c" name="quest" v-model="selected">
            <label>
              Tangente
            </label>
        </p>

        <p>
            <label id="d" for="d">d)</label>
            <input type="radio" value="d" name="quest" v-model="selected">
            <label>
              Secante
            </label>
        </p>
        
        <button id="button" @click="checkForm()"> Confirmar</button>

  </div>
</template>

<script>
import Plotly from 'plotly.js'
export default {
  name: 'Seno',
  mounted () {
    var frames = [
        {name: 'sine', data: [{x: [], y: []}]}
    ];
    var n = 100;
    for (var i = 0; i < n; i++) {
        var t = i / (n - 1) * 2 - 1;
        // A sine wave:
        frames[0].data[0].x[i] = t * Math.PI;
        frames[0].data[0].y[i] = Math.sin(t * Math.PI)
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
      msg: 'Qual função representa o gráfico a seguir?',
      selected: null,

    }
  },
  methods: {
    checkForm(){
      if(this.selected === 'a'){
          this.$router.replace({name:'Certo', params:{id:'seno'}});
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
  margin-left: -2.5%;
}

#plot{
  width: 100%;
  height: 25%;
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
}

</style>
