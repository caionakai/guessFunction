<template>
  <div id="origin">
      <div class="seno">
        <h4 class="title">Qual é a derivada para   
            <img id="prob" src="../../../assets/Question/Derivative/DeriQ2-prob.png"/>
        </h4>
      </div>

      <p id="t">
            <label id="a" for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                <img src="../../../assets/Question/Derivative/DeriQ2-x.png"/>      
            </label>
        </p>
        <p>
            <label id="b" for="inputB">b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                <img src="../../../assets/Question/Derivative/DeriQ2-xxx.png"/>      
            </label>
        </p>


        <p>
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                <img src="../../../assets/Question/Derivative/DeriQ2-xx.png"/>      
            </label>
        </p>

        <p>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
                <img src="../../../assets/Question/Derivative/DeriQ2-ans.png"/>      
            </label>
        </p>
        
        <button id="button" @click="checkForm()"> Confirmar</button>

  </div>
</template>

<script>
export default {
  name: 'DerivativeSimpleQ2',
  data () {
    return {
      selected: null,
    }
  },
  methods: {
    checkForm(){
      if(this.selected === 'd'){
          this.$router.replace({name:'Certo', params:{id:'derivativesimpleq2'}});
      }else{
          this.$router.replace({name:'Errado', params:{id:'derivativesimpleq2'}});
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
  margin-left: 2%;
  top: 20%;
}
#d{
    margin-left: 5.5%;
}
#t{
    margin-top: 5%; 
}
#c{
    margin-left: -0.0%;
}
#b{
    margin-left: -1.5%;
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
