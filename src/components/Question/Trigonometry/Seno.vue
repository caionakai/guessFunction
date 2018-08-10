<template>
  <div id="origin">
      <div>
        <video width="320" height="240" controls>
          <source src="../../../assets/Videos/video1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="graph"></div>
        <button onclick="startAnimation();">Animate!</button>
        <button @click="goBack()">Voltar!</button>
      <div class="seno">
        <h4 class="title">{{msg}}</h4>
        <div id="plot" ref="seno"></div>
      </div>

        <p>
            <label id="a" for="inputA">a)</label>
            <input id="inputA" type="radio" name="quest" value="a" v-model="selected">
            <label for="inputA">
              Seno
            </label>
        </p>
        <p>
            <label id="b" for="inputB">b)</label>
            <input id="inputB" type="radio" value="b" name="quest" v-model="selected">
            <label for="inputB">
              Cosseno
            </label>
        </p>


        <p>
            <label id="c" for="inputC">c)</label>
            <input id="inputC" type="radio" value="c" name="quest" v-model="selected">
            <label for="inputC">
              Tangente
            </label>
        </p>

        <p>
            <label id="d" for="inputD">d)</label>
            <input id="inputD" type="radio" value="d" name="quest" v-model="selected">
            <label for="inputD">
              Secante
            </label>
        </p>
        
        <button id="button" @click="checkForm()"> Confirmar</button>

  </div>
</template>

<script>
import Plotly from "plotly.js";
export default {
  name: "firstLevel",
  mounted() {
    var frames = [{ name: "sine", data: [{ x: [], y: [] }] }];
    var n = 100;
    for (var i = 0; i < n; i++) {
      var t = i / (n - 1) * 2 - 1;
      // A sine wave:
      frames[0].data[0].x[i] = t * Math.PI;
      frames[0].data[0].y[i] = Math.sin(t * Math.PI);
    }
    Plotly.plot(
      this.$refs.seno,
      [
        {
          x: frames[0].data[0].x,
          y: frames[0].data[0].y
        }
      ],
      {
        margin: { t: 0 }
      }
    );
    // outra div
    Plotly.plot(
      "graph",
      [
        {
          x: [-0.5, 0.8],
          y: [-0.5, 0.8]
        }
      ],
      {
        xaxis: { range: [-Math.PI, Math.PI] },
        yaxis: { range: [-1.3, 1.3] }
      }
    ).then(function() {
      Plotly.addFrames("graph", [
        {
          data: [{ x: [1, -1], y: [0, 0] }],
          name: "frame1"
        },
        {
          data: [{ x: [0, 0], y: [-1, 1] }],
          name: "frame2"
        }
      ]);
    });


  },
  data() {
    return {
      msg: "Qual função representa o gráfico a seguir?",
      selected: null,
      teste_x: 0.8
    };
  },
  methods: {
    checkForm() {
      if (this.selected === "a") {
        this.$router.replace({ name: "Certo", params: { id: "firstLevel" } });
      } else {
        this.$router.replace({ name: "Errado" });
      }
    },
    startAnimation() {
      Plotly.animate("graph", ["frame1", "frame2"], {
        frame: [{ duration: 1500 }, { duration: 500 }],
        transition: [
          { duration: 800, easing: "elastic-in" },
          { duration: 100, easing: "cubic-in" }
        ],
        mode: "afterall"
      });
    },
    goBack(){
      window.history.back();
    }
  }
};
</script>

<style scoped>
.js-plotly-plot {
  max-width: 100%;
}

#a {
  margin-left: -2.5%;
}

#plot {
  width: 100%;
  height: 25%;
}

#button {
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
