<template>
  <div id="origin">
      <div class="seno">
        <h4 class="title">Qual das alternativas seguintes é equivalente a 
            <img id="prob" src="../../../assets/Question/Trigonometria/question1-prob.png"/>
        </h4>
      </div>

      <p id="t">
            <label id="a" for="a">a)</label>
            <input type="radio" name="quest" value="a" v-model="selected">
            <label>
                <img src="../../../assets/Question/Trigonometria/question1-x.png"/>      
            </label>
        </p>
        <p>
            <label id="b" for="b">b)</label>
            <input type="radio" value="b" name="quest" v-model="selected">
            <label>
                <img src="../../../assets/Question/Trigonometria/question1-ans.png"/>      
            </label>
        </p>


        <p>
            <label id="c" for="c">c)</label>
            <input type="radio" value="c" name="quest" v-model="selected">
            <label>
                <img src="../../../assets/Question/Trigonometria/question1-xx.png"/>      
            </label>
        </p>

        <p>
            <label id="d" for="d">d)</label>
            <input type="radio" value="d" name="quest" v-model="selected">
            <label>
                <img src="../../../assets/Question/Trigonometria/question1-xxx.png"/>      
            </label>
        </p>
        
        <button id="button" @click="checkForm()"> Confirmar</button>

  </div>
</template>

<script>
import Plotly from 'plotly.js'
export default {
  name: 'IdentityTrigonometric',
  data () {
    return {
      selected: null,
    }
  },
  methods: {
    checkForm(){
      if(this.selected === 'b'){
          this.$router.replace({name:'Certo', params:{id:'identitytrigonometric'}});
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
  margin-left: -8.5%;
  top: 20%;
}
#d{
    margin-left: -10.4%;
}
#t{
    margin-top: 5%; 
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
