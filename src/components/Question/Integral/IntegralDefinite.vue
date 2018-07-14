<template>
  <div id="origin">
      <div class="seno">
        <h4 class="title">Qual a integral definida de  
            <img id="prob" src="../../../assets/Question/Integral/question3-prob.png"/>
        </h4>
      </div>

      <p id="t">
            <label id="a" for="a">a)</label>
            <input type="radio" name="quest" value="a" v-model="selected">
            <label>
                5/6
            </label>
        </p>
        <p>
            <label id="b" for="b">b)</label>
            <input type="radio" value="b" name="quest" v-model="selected">
            <label>
                5/7
            </label>
        </p>


        <p>
            <label id="c" for="c">c)</label>
            <input type="radio" value="c" name="quest" v-model="selected">
            <label>
                17/12
            </label>
        </p>

        <p>
            <label id="d" for="d">d)</label>
            <input type="radio" value="d" name="quest" v-model="selected">
            <label>
                4
            </label>
        </p>
        
        <button id="button" @click="checkForm()"> Confirmar</button>

  </div>
</template>

<script>
import Plotly from 'plotly.js'
export default {
  name: 'IntegralDefinite',
  data () {
    return {
      selected: null,
    }
  },
  methods: {
    checkForm(){
      if(this.selected === 'c'){
          this.$router.replace({name:'Certo', params:{id:'integraldefinite'}});
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
  margin-left: 0.1%;
}
#d{
    margin-left: -1.4%;
}
#t{
    margin-top: 5%; 
}
#c{
    margin-left: 1.5%;
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
