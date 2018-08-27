<template>
  <div id="learn-topics">
    <div id="content">
        <div id="text">

        <h1>Como Jogar?</h1>
        <h3>Objetivo</h3>
        <p>
            O objetivo do jogo é passar através de todas as fases para alcançar o final do mapa!
            Para isso será necessário aprender muitos conceitos de cálculo I. 
        </p>

        <h3>Elementos Visuais</h3>
        <p>
            As duas imagens abaixo 
            representam as fases, o círculo verde significa que a fase ainda não foi realizada, enquanto o 
            símbolo azul significa que a fase já foi completada. Além disso, é possível refazer as fases que 
            já foram feitas.
        </p>

        <img src="../../assets/undone.png"/>
        <img src="../../assets/done.png"/>

        <p>O interessante é realizar as fases de forma sequencial, uma por vez, para que o aproveitamento seja maior, pois
        elas estão organizadas de forma com que o nível de dificuldade aumente gradualmente.  
        </p>
        <a href="#/Intro" id="button">
            <span>Início</span>
        </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowToPlay'
}

</script>

<style scoped>
#content{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: aquamarine; /* Just to visualize the extent */
}
p{
    text-align: justify;
    margin-left: 22%;
}
#text{
    width: 50%;
    margin-left: 22%;
    
}
#button {
    display: inline-block;
    margin-bottom: 2%;
    margin-top: 10%;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow:    0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
    -moz-box-shadow: 0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
    box-shadow: 0 8px 0 #4286f4, 0 15px 20px rgba(0, 0, 0, .35);
    -webkit-transition: -webkit-box-shadow .1s ease-in-out;
    -moz-transition: -moz-box-shadow .1s ease-in-out;
    -o-transition: -o-box-shadow .1s ease-in-out;
    transition: box-shadow .1s ease-in-out;
    font-size: 25px;
    color: #fff;
}
#button span {
    display: inline-block;
    padding: 10px 20px;
    background-color: #4286f4;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    -webkit-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
    -moz-box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .15);
    line-height: 1;
    text-shadow: 0 -1px 1px rgba(175, 49, 95, .7);
    -webkit-transition: background-color .2s ease-in-out, -webkit-transform .1s ease-in-out;
    -moz-transition: background-color .2s ease-in-out, -moz-transform .1s ease-in-out;
    -o-transition: background-color .2s ease-in-out, -o-transform .1s ease-in-out;
    transition: background-color .2s ease-in-out, transform .1s ease-in-out;
    font-family: 'M PLUS Rounded 1c', sans-serif;
}

#button:hover span {
    background-color: #4286f4;
    text-shadow: 0 -1px 1px rgba(175, 49, 95, .9), 0 0 5px rgba(255, 255, 255, .8);
}
#button:active, #button:focus {
    -webkit-box-shadow:    0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
    -moz-box-shadow: 0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
    box-shadow:    0 8px 0 #4286f4, 0 12px 10px rgba(0, 0, 0, .3);
}

#button:active span {
    -webkit-transform: translate(0, 4px);
    -moz-transform: translate(0, 4px);
    -o-transform: translate(0, 4px);
    transform: translate(0, 4px);
}
p, h1,h3{
    font-family: 'M PLUS Rounded 1c', sans-serif;
}
body{
    background-color: #4286f4;
}
</style>
