<template>
  <div id="origin">
    <div id="body">
        <div class="seno">
            <p class="title"> 
              Determine a derivada da função: 
                <vue-mathjax style="display:inline-block" :formula="formula"></vue-mathjax>
            </p>     
        </div>
                <!-- x<sup>7</sup> -->
        <!-- <textarea v-model="formula" cols="30" rows="10"></textarea> -->
        <!-- {{this.formula}} -->
        
        <hr>
        <p id="t">
            <label id="a" for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                <vue-mathjax style="display:inline-block" :formula="formula3"></vue-mathjax>
            </label>
        </p>
        <hr>
        <p>
            <label id="b" for="inputB">b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                <vue-mathjax style="display:inline-block" :formula="formula2"></vue-mathjax>
            </label>
        </p>
        <hr>
        
        <p>
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                <vue-mathjax style="display:inline-block" :formula="formula4"></vue-mathjax>
            </label>
        </p>
        <hr>

        <p>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
                <vue-mathjax style="display:inline-block" :formula="formula5"></vue-mathjax>
            </label>
        </p>
        <hr>
        
        <div v-if="this.toggleModal" class="w3-modal">
            <div class="w3-modal-content w3-animate-zoom w3-card-4">
                    <header class="w3-container w3-teal">
                            <button id="xmod" @click="toggle()"><i class="fas fa-times"></i></button>
                        <h2>Parece que você está com dificuldades</h2>
                    </header>
                <div class="w3-container">
                    <p>Talvez seja melhor reassistir o conteúdo teórico..</p>
                    <p>Clique no botão abaixo para acessar o conteúdo novamente!</p>
                    <button id="teorico" @click="goTeoria()"> Conteúdo Teórico</button>
                    <p>Você também pode pular essa questão e refazê-la mais tarde, clicando no botão abaixo!</p>
                    <button id="btn-nextQuestion" @click="goMap()"> Pular questão</button>
                </div>
                <footer class="w3-container w3-teal">
                    <p></p>
                </footer>
            </div>
        </div>

        <div v-if="this.rightAns" class="w3-modal">
          <div class="w3-modal-content w3-animate-zoom w3-card-4">
            <header class="w3-container w3-teal">
              <h2>Bom Trabalho</h2>
            </header>
            <div class="w3-container">
              <img src="../../../../assets/star.png" />
            </div>
            <footer class="w3-container w3-teal">
              <button id="button" @click="goMap()"> Próxima Questão</button>
            </footer>
          </div>
      </div>


        <div id="buttonDiv">
            <div v-if="this.toggleDiv" id="box"> 
                <button id="x" @click="closeDiv()"><i class="fas fa-times"></i></button>
                <i v-if="this.rightAns" id="star" class="fas fa-star"></i> 
                <a v-if="this.rightAns" id="text">Muito Bem!</a>

                <i v-if="!this.rightAns" id="sad" class="far fa-frown"></i>
                <a v-if="!this.rightAns" id="text">Essa não!</a>
            </div>

            <button id="buttonBack" @click="goBack()"> Voltar</button>
            <button v-if="!this.rightAns" id="button" @click="checkForm()"> Confirmar Resposta</button>
            <button v-if="this.rightAns" id="button" @click="goMap()"> Próxima Questão</button>
        </div>
    </div>

  </div>
</template>

<script>
import { VueMathjax } from 'vue-mathjax'

export default {
  components: {
    'vue-mathjax': VueMathjax
  },
  name: "DerivQ4Ex1",

  data() {
    return {
      selected: null,
      rightAns: false,
      toggleDiv: false,
      counter: 0,
      level: null,
      toggleModal: false,
      // formula: '$$x = {a\\over2}.$$',
      formula : '',
      formula2 : '',
      formula3 : '',
      formula4 : '',
      formula5 : '',
    };
  },
  beforeCreate(){
    },
  mounted(){
    // this.formula = '$$x = {a\\over2}.$$'
    this.updateFormula()
    this.level = JSON.parse(localStorage.getItem("level"));
  },
  beforeMount(){
    //   this.reloadPage()
  },
  methods: {
    checkForm() {
      if (this.selected === "b") {
        //   this.$router.replace({name:'Certo', params:{id:'firstLevel'}});
        this.level.third = true; 
        localStorage.setItem('level', JSON.stringify(this.level))
        this.toggleDiv = true;
        this.rightAns = true;
      } else {
        //   this.$router.replace({name:'Errado', params:{id:'limq1'}});
        this.toggleDiv = true;
        this.rightAns = false;
        // contador de vezes que o usuário errou a questão!
        if (this.counter == 1) {
          // abre modal com mensagem de ajuda
          this.toggle();
        }
        this.counter += 1;
      }
    },
    updateFormula: function () {
      this.$nextTick(function () {
        this.formula = '$$f(x) = {2\\over 3x^7}.$$'
        this.formula2 = '$$-{14\\over 3x^8}.$$'
        this.formula3 = '$$-{14\\over 3x^6}.$$'
        this.formula4 = '$$-{2\\over 21x^8}.$$'
        this.formula5 = '$$-{2\\over 21x^6}.$$'
      })
    },
    toggle() {
      this.toggleModal = !this.toggleModal;
      this.counter = 0;
    },
    closeDiv() {
      this.toggleDiv = false;
    },
    goBack() {
        window.history.back();
    },
    goTeoria(){
      this.$router.push({ name: "DerivQ4" });
    },
    goMap() {
      // this.updateLevel("firstLevel");
      this.$router.push({ name: "Map" });
    },
    updateLevel(nameLevel) {
      this.$emit("updateLevel", nameLevel);
    },
    reloadPage() {
      if( window.localStorage ){
        if( !localStorage.getItem('firstLoad') )
        {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }  
        else
          localStorage.removeItem('firstLoad');
        }
    }
  }
};
</script>

<style scoped>

#text {
  font-size: 45% !important;
  color: black !important;
  margin-top: 0%;
}
#a {
  margin-left: 0.1%;
}

#ggb-element{
  margin-left: 20%;
}

input,
label {
  cursor: pointer;
}

#d {
  margin-left: -1.4%;
}
#c {
  margin-left: -1%;
}

.seno {
  margin-bottom: 10%;
}

#button {
  margin-bottom: 3%;
  margin-top: 1%;
  /* margin-left: 70%; */
  background-color: #3aff47;
  padding: 0.5%;
  border: none;
  border-radius: 5%;
  font-size: 120%;
  color: #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  cursor: pointer;
}
#buttonBack {
  background-color: gray;
  padding: 0.5%;
  border: none;
  border-radius: 5%;
  font-size: 120%;
  color: #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  cursor: pointer;
}
#teorico {
  margin-bottom: 2%;
  background-color: rgb(251, 255, 0);
  padding: 0.5%;
  border: none;
  border-radius: 5%;
  font-size: 120%;
  color: #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  cursor: pointer;
}
#btn-nextQuestion {
  margin-bottom: 2%;
  background-color: rgb(50, 200, 205);
  padding: 0.5%;
  border: none;
  border-radius: 5%;
  font-size: 120%;
  color: #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  cursor: pointer;
}
p, button {
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
label {
  font-style: italic;
}
#body {
  margin: auto;
  width: 80%;
  min-height: 85%;
  border: solid white;
  border-radius: 5%;
  padding: 10px;
  margin-top: 2%;
  background-color: #fff;
}
#origin {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: rgb(37, 134, 224);
}

#box {
  position: relative;
  border: 2px solid gray;
  color: yellow;
  padding: 0.5%;
  font-size: 3em;
  width: 20%;
  margin: auto;
}
#star {
  float: left;
}
#sad {
  float: left;
}
#x {
  position: relative;
  float: right;
  border: none;
  padding: 0%;
  background: none;
  cursor: pointer;
}
#xmod {
  position: relative;
  color: red;
  font-size: 200%;
  float: right;
  border: none;
  padding: 0%;
  background: none;
  cursor: pointer;
}
.w3-modal {
  z-index: 3;
  padding-top: 3%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.w3-modal-content {
  margin: auto;
  background-color: #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  position: relative;
  padding: 0;
  outline: 0;
  width: 60%;
}
@media (max-width: 768px) {
  .w3-modal-content {
    width: 500px;
  }
  .w3-modal {
    padding-top: 3%;
    padding-bottom: 3%;
  }
}
@media (min-width: 993px) {
  .w3-modal-content {
    width: 900px;
  }
  .w3-hide-large {
    display: none !important;
  }
  .w3-sidebar.w3-collapse {
    display: block !important;
  }
}

.w3-large {
  font-size: 18px !important;
}
.w3-btn,
.w3-button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w3-teal,
.w3-hover-teal:hover {
  color: #fff !important;
  background-color: #00a2ff !important;
}

.w3-white,
.w3-hover-white:hover {
  color: #000 !important;
  background-color: #fff !important;
}
.w3-light-grey,
.w3-hover-light-grey:hover,
.w3-light-gray,
.w3-hover-light-gray:hover {
  color: #000 !important;
  background-color: #f1f1f1 !important;
}
.w3-display-topright {
  position: absolute;
  right: 0;
  top: 0;
}

.w3-animate-zoom {
  animation: animatezoom 0.6s;
}
@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.w3-container,
.w3-panel {
  padding: 0.01em 16px;
}
.w3-btn,
.w3-button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.w3-display-topright {
  position: absolute;
  right: 0;
  top: 0;
}
</style>