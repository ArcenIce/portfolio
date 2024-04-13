<template>
    <div class="block-right">
        <img src="@/assets/fisherman.svg" width="250" height="250" class="ml-n16 mb-n2" />
        <v-sheet class="ground-card"></v-sheet>
    </div>
</template>

<script setup>

</script>

<style scoped>
.block-right {
    display: block;
    position: absolute;
    right: -64px;
    top: 41vh;
    height: 600px;
    width: 600px;
    z-index: 1;
}

.ground-card {
    height: 420px;
    width: 100%;
    border-radius: 64px !important;
    background: rgb(142,209,252);
    background: linear-gradient(0deg, rgba(142,209,252,0) 8%, rgba(0,255,242,1) 40%, rgba(255,255,255,1) 100%);
}
</style>