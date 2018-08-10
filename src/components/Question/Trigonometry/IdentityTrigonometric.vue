<template>
  <div id="origin">
    <div class="seno">
        <p class="title">Qual das alternativas seguintes é equivalente a&nbsp;
            <img id="prob" src="../../../assets/Question/Trigonometria/question1-prob.png"/>
        </p>
    </div>
    
    <div>
        <p class="resp">
            <label id="a" for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                <img src="../../../assets/Question/Trigonometria/question1-x.png"/>      
            </label>
        </p>
        <p class="resp">
            <label id="b" for="inputB" >b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                <img src="../../../assets/Question/Trigonometria/question1-ans.png"/>      
            </label>
        </p>


        <p class="resp">
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                <img src="../../../assets/Question/Trigonometria/question1-xx.png"/>      
            </label>
        </p>

        <p class='resp'>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
                <img src="../../../assets/Question/Trigonometria/question1-xxx.png"/>      
            </label>
        </p>

    </div>
        
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
          this.$router.replace({name:'Certo', params:{id:'fifthLevel'}});
      }else{
          this.$router.replace({name:'Errado'});
      }
    }
  }
}
</script>

<style scoped>
.resp{
    display: block;
    vertical-align: middle;
    margin-left: 25% auto;
    
}
#a{
  margin-left: -6%;
  top: 20%;
}
#d{
    margin-left: -7.4%;
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
p{
    font-family: "Comic Sans MS", cursive, sans-serif;
}

</style>
