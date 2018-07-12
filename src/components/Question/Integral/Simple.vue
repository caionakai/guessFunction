<template>
    <div id="main">
        <p>Calcule a integral seguinte utilizando o método de substituição</p>
        <img src="../../../assets/Question/Integral/integralsimple.gif" />
        
        <p>
            <label for="u">u:</label>
            <input type="text" name="u" v-model="u">
        </p>
        <p>
            <label for="du">du:</label>
            <input type="text" name="du" v-model="du">
        </p>
        <p>
            <label for="integral">&#8747;</label>
            <input type="text" name="integral" v-model="integral">
        </p>
        
        <h1 v-if="this.errors === 'ok'"> Acertou!</h1>
        <h1 v-if="this.errors === 'bad'"> Errou!</h1>
        <p>{{this.u}}</p>
        <button @click="checkForm()"> Go!</button>
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
            respintegral:'cos(u)du',
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

</style>
