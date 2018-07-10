<template>
  <div id="learn-topics">
    <div id="content">
        <h1 id="title">Integral</h1>
        <a href="#/topics" id="button">
            <span>Voltar</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Integral'
}

</script>

<style scoped>
#content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-position: 50% 50%;
    background-color: aquamarine;
}

#title{
    font-family: "Comic Sans MS", cursive, sans-serif;
}

#listContent{
    width: 30%;
    font-family: 'Gaegu', cursive;
    font-size: 150%;
}

#button {
    display: inline-block;
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
    font-family: "Comic Sans MS", cursive, sans-serif;
    line-height: 1;
    text-shadow: 0 -1px 1px rgba(175, 49, 95, .7);
    -webkit-transition: background-color .2s ease-in-out, -webkit-transform .1s ease-in-out;
    -moz-transition: background-color .2s ease-in-out, -moz-transform .1s ease-in-out;
    -o-transition: background-color .2s ease-in-out, -o-transform .1s ease-in-out;
    transition: background-color .2s ease-in-out, transform .1s ease-in-out;
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

</style>
