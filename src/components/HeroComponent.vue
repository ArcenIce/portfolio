<template>
    <div class="hero py-16 px-16 d-flex flex-column justify-center">
        <h1 class="istok-web-bold text-h1">Hello <span class="text-primary">world !</span></h1>
        <h1 class="istok-web-bold text-h1 text-primary mt-4">My name is Alex</h1>
        <v-btn class="bg-primary mt-12" color="primary" rounded="xl" width="450px" height="90px" v-ripple="{ class: `text-white` }">
            <span class="text-h3 istok-web-bold text-white">Yes, and ?</span>
        </v-btn>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hero {
    width: 100vw;
    height: 60vh;
}
</style>