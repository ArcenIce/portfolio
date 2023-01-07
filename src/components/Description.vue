<template>
    <section class="description">
        <div class="desclayout">
            <img v-bind:src="image">
            <div id="text">
                <h1>Qui suis-je ?</h1>
                <h2>vhursbvbnsiebsiuebnvs</h2>
            </div>
        </div>
    </section>
</template>
  
<script>
  export default {
    name: 'desc-v',
    data: function () {
      return {
        image: 'astronaut.png'
      }
    },
  }
</script>
  
<style>
  
    .description {
        margin:auto;
        margin-top: 250px;
        width: 100%;
        padding-left: 10px;
        align-content: center;
        height:100vh;
        scroll-snap-align: start;
        /* display: inline-flex; */
    }

    .desclayout {
        display:inline-flex;
        width: 100%;
    }
  
    #text {
        display: block;
        left:0px;
        text-align: left;
    }
  
  .description h1 {
    font-size: 2em;
    font-size: clamp(0.1em, 1em + 1vw, 2em);
    color: rgb(224, 224, 224);
    padding-left: 1em;
    width: 100%;
    height: 100px;
    background: none;
    text-align: left;
    left:0px;
  }
  
</style>