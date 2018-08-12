<template>
  <div id="origin">
    <div id="body">
        <div class="seno">
            <p class="title"> Dada a função:  &nbsp;
                <img id="prob" src="../../../assets/Question/Derivada/questao1-prob.png"/>. Encontre o
                coeficiente angular de uma reta tangente no ponto P(1,-1).
            </p>
        </div>
        <hr>
        <p id="t">
            <label id="a" for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                <!-- <img id="prob" src="../../../assets/Question/Limit/LimQ1-ans.png"/> -->
                f'(1) = 0
            </label>
        </p>
        <hr>
        <p>
            <label id="b" for="inputB">b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                <!-- <img id="prob" src="../../../assets/Question/Limit/LimQ1-x.png"/> -->
                f'(1) = 2
            </label>
        </p>
        <hr>


        <p>
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                <!-- <img id="prob" src="../../../assets/Question/Limit/LimQ1-xx.png"/> -->
                f'(1) = 4
            </label>
        </p>
        <hr>

        <p>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
                <!-- <img id="prob" src="../../../assets/Question/Limit/LimQ1-xxx.png"/>                 -->
                f'(1) = 6
            </label>
        </p>
        <hr>
        
        <button id="buttonBack" @click="goBack()"> Voltar</button>
        <button id="button" @click="checkForm()"> Confirmar Resposta</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DerivQ1Ex',
  data () {
    return {
      selected: null,
    }
  },
  methods: {
    checkForm(){
      if(this.selected === 'a'){
          this.$router.replace({name:'Certo', params:{id:'firstLevel'}});
      }else{
          this.$router.replace({name:'Errado', params:{id:'limq1'}});
      }
    },
    goBack(){
        this.$router.replace({ name: "DerivQ1" });
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
#c{
    margin-left: -1.0%;
}

.seno{
    margin-bottom: 10%;
}

#button{
    display: inline-block;
    margin-top: 10%;
    margin-left: 70%;
    background-color: #3aff47;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #fff;
    font-family: "Comic Sans MS", cursive, sans-serif;
    cursor: pointer;
}
#buttonBack{
    display: inline-block;
    margin-top: 3%;
    background-color: gray;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: #fff;
    font-family: "Comic Sans MS", cursive, sans-serif;
    cursor: pointer;
}
p{
    font-family: "Comic Sans MS", cursive, sans-serif;
}
label{
    font-style: italic;
}
#body{
  margin: auto;
  width: 80%;
  height: 90%;
  border: solid white;
  border-radius: 5%;
  padding: 10px;
  margin-top: 2%;
  background-color: #fff;
}
#origin{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: rgb(37, 134, 224);
}

</style>
