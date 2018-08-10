<template>
  <div id="origin">
      <div class="seno">
        <p class="title">Qual é a derivada de &nbsp;
            <img id="prob" src="../../../assets/Question/Derivative/DeriQ3-prob.png"/>
        </p>
        <p id="text">
            Dica: 
        </p>
        <div id="hint">
            <img src="../../../assets/Question/Derivative/DeriQ3-hint.png"/>
        </div>
      </div>

      <p id="t">
            <label id="a" for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                <img src="../../../assets/Question/Derivative/DeriQ3-x.png"/>      
            </label>
        </p>
        <p>
            <label id="b" for="inputB">b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                <img src="../../../assets/Question/Derivative/DeriQ3-xxx.png"/>      
            </label>
        </p>


        <p>
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                <img src="../../../assets/Question/Derivative/DeriQ3-xx.png"/>      
            </label>
        </p>

        <p>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
                <img src="../../../assets/Question/Derivative/DeriQ3-ans.png"/>      
            </label>
        </p>
        
        <button id="button" @click="checkForm()"> Confirmar</button>

  </div>
</template>

<script>
export default {
  name: 'DeriQ3',
  data () {
    return {
      selected: null,
    }
  },
  methods: {
    checkForm(){
      if(this.selected === 'd'){
          this.$router.replace({name:'Certo', params:{id:'twelfthLevel'}});
      }else{
          this.$router.replace({name:'Errado', params:{id:'deriq3'}});
      }
    }
  }
}
</script>

<style scoped>
#a{
  margin-left: 2%;
}
#d{
    margin-left: 8.2%;
}
#t{
    margin-top: 2%; 
}
#c{
    margin-left: 1.3%;
}
#b{
    margin-left: 0.5%;
}
#text{
    color: blue;
    margin-left: -16%;
}
#prob{
}
#hint{
    border: 3px solid blue;
    width: 17%;
    margin: auto;
    padding: 0.5%;
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
