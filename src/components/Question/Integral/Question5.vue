<template>
  <div id="origin">
    <div class="seno">
        <p class="title">Qual é a integral indefinida de  &nbsp;
            <img id="prob" src="../../../assets/Question/Integral/question5-prob.png"/>
        </p>
    </div>

    <p id="t">
        <label id="a" for="inputA">a)</label>
        <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
        <label for="inputA">
            <img src="../../../assets/Question/Integral/question5-xx.png"/>      
        </label>
    </p>

    <p>
        <label id="b" for="inputB">b)</label>
        <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
        <label for="inputB">
            <img src="../../../assets/Question/Integral/question5-x.png"/>      
        </label>
    </p>

    <p>
        <label id="c" for="inputC">c)</label>
        <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
        <label for="inputC">
            <img src="../../../assets/Question/Integral/question5-ans.png"/>      
        </label>
    </p>

    <p>
        <label id="d" for="inputD">d)</label>
        <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
        <label for="inputD">
            <img src="../../../assets/Question/Integral/question5-xxx.png"/>      
        </label>
    </p>
        
    <button id="button" @click="checkForm()"> Confirmar</button>

  </div>
</template>

<script>
export default {
  name: "Question4",
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    checkForm() {
      if (this.selected === "c") {
        this.$router.replace({
          name: "Certo",
          params: { id: "eleventhLevel" }
        });
      } else {
        this.$router.replace({ name: "Errado", params: { id: "question5" } });
      }
    }
  }
};
</script>

<style scoped>
#a {
  margin-left: -1.5%;
  top: 20%;
}
#b{
  margin-left: -2%;
}
#d {
  margin-left: -1.8%;
}
#t {
  margin-top: 5%;
}
#c {
  margin-left: -1%;
}

#button {
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
p {
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
