<template>
  <div id="origin">
      <div class="seno">
        <p class="title">Qual é a integral definida de &nbsp;
            <img id="prob" src="../../../assets/Question/Integral/question3-prob.png"/>
        </p>
      </div>

      <p id="t">
            <label id="a" for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                5/6
            </label>
        </p>
        <p>
            <label id="b" for="inputB">b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                5/7
            </label>
        </p>


        <p>
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                17/12
            </label>
        </p>

        <p>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
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
          this.$router.replace({name:'Certo', params:{id:'seventh'}});
      }else{
          this.$router.replace({name:'Errado'});
      }
    }
  }
}
</script>

<style scoped>
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
    margin-left: 1.0%;
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
p{
    font-family: "Comic Sans MS", cursive, sans-serif;
}

</style>
