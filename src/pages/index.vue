<template>
  <vue-particles
            id="tsparticles"
            @particles-loaded="particlesLoaded"
            :options="particleOptions"
        />
</template>

<script setup>
import { ref } from 'vue';

const particleOptions = {

}

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

</script>
