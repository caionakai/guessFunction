<template>
    <div id="main">
        <p>Qual é a integral indefinida de x^2 +7?</p>

        <p>
            <label for="inputA">a)</label>
            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
            <label for="inputA">
                <img src="../../../assets/Question/Integral/radioA1.gif" />
            </label>
        </p>
        <p>
            <label id="b" for="inputB">b)</label>
            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
            <label for="inputB">
                <img src="../../../assets/Question/Integral/radioB1.gif" />
            </label>
        </p>


        <p>
            <label id="c" for="inputC">c)</label>
            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
            <label for="inputC">
                <img src="../../../assets/Question/Integral/radioC1.gif" />
            </label>
        </p>

        <p>
            <label id="d" for="inputD">d)</label>
            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
            <label for="inputD">
                <img src="../../../assets/Question/Integral/radioD1.gif" />
            </label>
        </p>

        <button id="button" @click="checkForm()"> Confirmar</button>
    </div>
</template>

<script>
export default {
    name: 'IntegralSimpleRadio',
    data(){
        return {
            selected: null
        }
    },
    created(){
    },
    methods:{
        checkForm(){
            if(this.selected === 'd'){
                this.$router.replace({name:'Certo', params:{id:'fourthLevel'}});

            }else{
                this.$router.replace({name:'Errado'});
            }
        }
    }
}
</script>

<style scoped>
#b{
    margin-left: 1.5%;
}
#c{
    margin-left: 0%;
}
#d{
    margin-left: 3.6%;
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
