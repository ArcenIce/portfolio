<template>
    <div class="bubbles">

        <div class="top"></div>
        
        <div class="content" v-for="bubble in bubblesList" :key="bubble.size">
            <div class="bubble" :style="{
                'margin-left':bubble.margin+'px',
                'width':bubble.size+'px',
                'height':bubble.size+'px'
                }">
            </div>                        
        </div>
        <div class="bottom"></div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </defs>
    </svg>

  </template>
  
<script>
  
  export default {
    name: 'bubbles-c',
    data () {
        return {
            bubblesList: [],
            spawnBubbles: true
        }
    },
    mounted() {
        setInterval(() => {
            let size = Math.floor(Math.random()*(180) + 30);
            this.bubblesList.push({
                size: size,
                margin: Math.floor(Math.random()*(window.innerWidth-(size)))
            });
            setTimeout(() => this.bubblesList = this.bubblesList.slice(1), 19500);
        }, 500)
    },
  }
</script>
  
<style>

    body{
        background: transparent;
    }

    svg {
        display:none;
    }

    .bubbles {
        display:flex;
        flex-direction:column; 
        flex:1;
        height:100%;
        overflow:hidden;
        filter: url("#goo");
    }
  
    .bubble{
        background: #875ae0;
        width: 150px;
        height: 150px;
        border-radius: 250px;
        animation: wobble 20s ease-in-out alternate infinite, totop 20s linear infinite;
        animation-timing-function: ease-in-out;
        z-index:2;
        position: absolute;
    }

    @keyframes totop {
        from {
            bottom:-220px;
        }

        to {
            transform:translateY(-250vh)
        }
    }

    @keyframes wobble {
        50% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
        }
        100% {
            border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
        }
    }

    .top {
        background-color: transparent;
        background-image: url("../../public/top.svg");
        background-position-y: top;
        background-size: cover;
        height: 30vh;
    }


    .bottom {
        background-color: transparent;
        background-image: url("../../public/back.svg");
        background-position-y: bottom;
        background-size: cover;
        height: 30vh;
        margin-top:auto;
    }

  

</style>