<template>
  <div id="origin">
    <div id="body">
        <div class="seno">
            <p class="title"> 
                Uma bola é atirada no ar com uma velocidade de 40 pés/s, e sua altura em pés após t segundos é
                dada por y = 40t - 16t². Encontre a velocidade instantânea quando t = 2.
            </p>

        </div>
        <hr>
        <p id="t">
            <label id="a" for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                v = 24 pés/s
            </label>
        </p>
        <hr>
        <p>
            <label id="b" for="inputB">b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                v = 16 pés/s
            </label>
        </p>
        <hr>
        
        <p>
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                v = -16 pés/s
            </label>
        </p>
        <hr>

        <p>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
                v = -24 pés/s
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
export default {
  name: "DerivQ1Ex3",
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
  },
  methods: {
    checkForm() {
      if (this.selected === "d") {
        this.level.first = true; 
        localStorage.setItem('level', JSON.stringify(this.level))
        this.toggleDiv = true;
        this.rightAns = true;
      } else {
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
    goTeoria(){
      this.$router.push({ name: "DerivQ1" });
    },
    goBack() {
        window.history.back();
    },
    goMap() {
      // this.updateLevel("firstLevel");
      this.$router.replace({ name: "Map" });
    },
    updateLevel(nameLevel) {
      this.$emit("updateLevel", nameLevel);
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