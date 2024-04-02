<template>
    <vue-particles
        id="tsparticles"
        :options="particleOptions"
    />
    <HeroComponent></HeroComponent>
    <WavesComponent/>
    <div class="backgr"></div>
    <FishermanComponent></FishermanComponent>

</template>

<script setup>
import particleOptions from '../config/config';

</script>

<style scoped>
.backgr {
    height: 1000px;
    width: 100%;
    position:absolute;
    top: 95vh;
    left:0;
    background: #8ED1FC;
    opacity: 1;
}

</style>