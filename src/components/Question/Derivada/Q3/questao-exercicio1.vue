<template>
  <div id="origin">
    <div id="body">
        <div class="seno">
            <p class="title"> 
                Encontre a derivada da equação f(x)=x² - 2x + 10, utilizando a regra da potência.
            </p>
            
        </div>
        <hr>
        <p id="t">
            <label id="a" for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                f'(x) = x - 2
            </label>
        </p>
        <hr>
        <p>
            <label id="b" for="inputB">b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                f'(x) = 2x - 2
            </label>
        </p>
        <hr>
        


        <p>
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                f'(x) = 2x + 8
            </label>
        </p>
        <hr>

        <p>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
                f'(x) = 2x³ + 8
            </label>
        </p>
        <hr>

        <!-- <h1>Simulações Teste</h1>
        <div id="ggb-element"></div> 
        <br/>
        <div id="ggb-element2"></div>  -->

        
        <!-- <button @click="checkGeo()" >Checar</button> -->
        
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
export default {
  name: "DerivQ3Ex1",
  data() {
    return {
      selected: null,
      rightAns: false,
      toggleDiv: false,
      counter: 0,
      level: null,
      toggleModal: false,
    };
  },
  mounted(){
    this.level = JSON.parse(localStorage.getItem("level"));
    var ggbApp = new GGBApplet({"id": "ggbApplet","enableShiftDragZoom":false, "showAnimationButton":false, "appName": "classic", "width": 700, "height": 500, "showToolBar": false, "showAlgebraInput": false, "showMenuBar": false, "ggbBase64":"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" });
      window.addEventListener("load", function() { 
      ggbApp.inject('ggb-element');
    });  
    var ggbApp2 = new GGBApplet({"id": "ggbApplet","enableShiftDragZoom":false, "showAnimationButton":false, "appName": "classic", "width": 830, "height": 500, "showToolBar": false, "showAlgebraInput": false, "showMenuBar": false, "ggbBase64":"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" });
      window.addEventListener("load", function() { 
      ggbApp2.inject('ggb-element2');
    });  
  },
  beforeMount(){
      // this.reloadPage()
  },
  methods: {
    checkForm() {
      if (this.selected === "b") {
        //   this.$router.replace({name:'Certo', params:{id:'firstLevel'}});
        this.level.fourth = true; 
        localStorage.setItem('level', JSON.stringify(this.level))
        this.toggleDiv = true;
        this.rightAns = true;
      } else {
        //   this.$router.replace({name:'Errado', params:{id:'limq1'}});
        this.toggleDiv = true;
        this.rightAns = false;

        if (this.counter == 1) {
          this.toggle();
        }
        this.counter += 1;
      }
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
      this.$router.push({ name: "DerivQ3" });
    },
    goMap() {
      // this.updateLevel("firstLevel");
      this.$router.push({ name: "Map" });
    },
    updateLevel(nameLevel) {
      this.$emit("updateLevel", nameLevel);
    },
    checkGeo(){
      this.resultado = ggbApplet.getExerciseResult()
      console.log(this.resultado.Quadrilatero1.result)
      
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
#ggb-element2{
  margin-left: 15%;
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