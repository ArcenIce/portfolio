<template>
    <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <!-- <div class="wave"></div> -->
    </div>
</template>

<script setup>

</script>

<style scoped>
.ocean { 
    height: 5%;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
}

.wave {
    background: url(@/assets/wave.svg) repeat-x; 
    position: absolute;
    top: -190px;
    width: 6400px;
    height: 200px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.5;
}

/* .wave:nth-of-type(1) {
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 0.5;
} */

.wave:nth-of-type(2) {
    top: -100px;
    animation: wave2 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    height: 100px;
    opacity: 1;
}

.wave:nth-of-type(3) {
    top: -150px;
    height: 150px;
    opacity: 0.7;
    animation: wave1 8s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
}

.wave:nth-of-type(4) {
    top: -100px;
    animation: wave2 4s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    height: 100px;
    opacity: 1;
}

@keyframes wave {
    0% {
        margin-left: 0;
    }
    100% {
        margin-left: -1600px;
    }
}

@keyframes wave2 {
    0% {
        margin-left: -1600px;
    }
    100% {
        margin-left: 0px;
    }
}

/* @keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
} */

</style>