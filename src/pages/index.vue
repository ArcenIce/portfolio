<template>
    <vue-particles
        id="tsparticles"
        :options="particleOptions"
    />
    <HeroComponent></HeroComponent>
    <WavesComponent/>
    <FishermanComponent></FishermanComponent>

    <AboutMe></AboutMe>
</template>

<script setup>
import particleOptions from '../config/config';

</script>

<style scoped>


</style>