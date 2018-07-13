<template>
    <div id="main">
        <p>Qual é a integral indefinida de x^2 +7?</p>

        <p>
            <label for="b">a)</label>
            <input type="radio" name="quest" value="a" v-model="selected">
            <label>
                <img src="../../../assets/Question/Integral/radioA1.gif" />
            </label>
        </p>
        <p>
            <label id="b" for="b">b)</label>
            <input type="radio" value="b" name="quest" v-model="selected">
            <label>
                <img src="../../../assets/Question/Integral/radioB1.gif" />
            </label>
        </p>


        <p>
            <label id="c" for="c">c)</label>
            <input type="radio" value="c" name="quest" v-model="selected">
            <label>
                <img src="../../../assets/Question/Integral/radioC1.gif" />
            </label>
        </p>

        <p>
            <label id="d" for="d">d)</label>
            <input type="radio" value="d" name="quest" v-model="selected">
            <label>
                <img src="../../../assets/Question/Integral/radioD1.gif" />
            </label>
        </p>

        <button @click="checkForm()"> Enviar Resposta</button>
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
                this.$router.replace({name:'Certo', params:{id:'integralsimple'}});

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
    margin-left: -0.9%;
}
#d{
    margin-left: 3.6%;
}
</style>
