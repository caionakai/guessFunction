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

        
        <div id="ggb-element"></div> 

        
        <button @click="checkGeo()" >Checar</button>
        
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
    var ggbApp = new GGBApplet({"id": "ggbApplet","appName": "graphing", "width": 700, "height": 500, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true, "ggbBase64":"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" }, true);
      window.addEventListener("load", function() { 
      ggbApp.inject('ggb-element');
    });  
  },
  beforeMount(){
      this.reloadPage()
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