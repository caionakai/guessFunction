<template>
  <div id="mapa">
    <img src="../assets/mapa.png" alt="" id="trilha" usemap="#Map" />
    <map name="Map" id="Map">
        <area alt="" title="" href="#/seno" shape="poly" coords="69,470,92,475,102,487,98,499,82,504,63,505,43,502,31,482,48,473" />
    </map>
  </div>
</template>

<script>
export default {
  name: 'Mapa',
}

</script>

<style scoped>

#trilha{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    /* background-size: cover; idk what this line do*/
    background-position: 50% 50%;
    /* background-size: 950px 500px; */

}

</style>
