<template>
    <section class="home">
      <div class="titles">
        <h1 id="portf">PORTFOLIO</h1>
        <h1 id="name">Alex Lovergne</h1>
      </div>
      <span class="arrow arrow-bottom"></span>
    </section>
  </template>
  
  <script>
  export default {
    name: 'home-v',
  }
  </script>
  
<style>

    @keyframes splash {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
  
    .home {
        opacity: 0;
        transition: 0.3s all ease-out;   
        animation: splash 1s normal forwards ease-in-out;
        height:100vh;
        scroll-snap-align: start;
    }

    .titles {
        padding-top: 400px;
    }
    
    .titles h1 {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        background: transparent;
        width: 100%;
    }
    
    #portf {
        /* margin-top: 400px; */
        font-size: 2em;
        letter-spacing: clamp(0.1em, 1em + 1vw, 1.5em);
        font-size: clamp(0.1em, 1em + 1vw, 2em);
        color: rgb(224, 224, 224);
        padding-left: 1em;
        width: 80%;
    }
    
    #name {
        font-size: 1em;
        color: rgb(224, 224, 224);
        width: 60%;
        margin-top: 20px;
        padding-left: 6px;
    }

    .arrow {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-top: 2px solid rgb(255, 255, 255);
        border-right: 2px solid rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-top: 25vh;
        animation: bounce 1000ms cubic-bezier(0.9, 0.7, 0.5, 0.9) infinite;
    }

    .arrow-bottom {
        transform: rotate(135deg);
    }

    @keyframes bounce {
        50% {
            transform: translateY(20px) rotate(135deg);
        }
        0% {
            transform: translateY(0px) rotate(135deg);
        }
    }
  
</style>