<template>
    <div id="main">
        <p>Calcule a integral seguinte utilizando o método de substituição</p>
        <img src="../../../assets/Question/Integral/integralsimple.gif" />

        <p>
            <label for="u">u:</label>
            <input type="text" name="u" v-model="u">
        </p>
        <p>
            <label id="teste" for="du">du:</label>
            <input type="text" name="du" v-model="du">
        </p>

        <img src="../../../assets/Question/Integral/integralsimple-1.gif" />

        <p>
            <label id="resposta" for="integral">Resposta:</label>
            <input type="text" name="integral" v-model="integral">
        </p>

        <button id="button" @click="checkForm()"> Confirmar</button>
    </div>
</template>

<script>
export default {
    name: 'IntegralSimple',
    data(){
        return {
            u: null,
            du: null,
            integral: null,
            respu: 'x^2',
            respdu: '2xdx', 
            respintegral:'sen(x^2)+c',
            errors: 'a',
        }
    },
    created(){
    },
    methods:{
        checkForm(){
            if(this.u === this.respu && this.du === this.respdu && this.integral === this.respintegral){
                // console.log('oi')
                this.$router.replace({name:'Certo', params:{id:'integralsimple'}});
                this.errors = 'ok';

            }else{
                this.$router.replace({name:'Errado'});
                this.errors = 'bad';
                // console.log('oi')
                // this.u = 'caio';
            }
        }
    }
}
</script>

<style scoped>
#teste{
    margin-left: -1%;
}
#resposta{
    margin-left: -6%;
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
</style>
