<template>
  <div class="layout">
    <!-- <div class="photo"> -->
      
    <!-- </div> -->
    <!--
    <nav>
      <ul>
        <li><button>Accueil</button></li>
        <li><button>Portfolio</button></li>
        <li><button>A propos</button></li>
      </ul>
    </nav>
    -->

    <Home></Home>

    <Description class="fade-in"></Description>

    <Bubbles></Bubbles>
  </div>
</template>

<script>
import Bubbles from '../components/Bubbles.vue'
import Home from '../components/Home.vue'
import Description from '../components/Description.vue'
export default {
  name: 'layout-v',
  components: {
    Bubbles,
    Home,
    Description
  },
  data: function () {
    return {
      fadeInElements:{},
      image: 'astronaut.png'
    }
  },
  mounted() {
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    document.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
      document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      for (let i = 0; i < this.fadeInElements.length; i++) {
        const elem = this.fadeInElements[i]
        if (this.isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.style.transform = 'scale(1)'
          this.fadeInElements.splice(i, 1) // Pour jouer l'animation seulement une fois
        }
      }
    },
    isElemVisible(el) {
      const rect = el.getBoundingClientRect()
      const elemTop = rect.top + 300 // buffer
      const elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    }
  }
}
</script>

<style>

body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  scroll-behavior: smooth;
}

.layout {
  font-size: 32px;
  letter-spacing: 6px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.bubbles {
  overflow:hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  width:100%;
  height: 3000px;
  z-index: -50;
}

.fade-in {  
	height: 500px;  
	margin-bottom: 50px;  
	opacity: 0;  
	transition: 0.3s all ease-out;  
	transform: scale(0.8);  
	box-sizing: border-box;  
	padding: 20px;  
}


h1 {
  display:flex;
  margin:auto;
  color:white;
  font-size: 50px;
  text-align:center;
  justify-content: center;
  align-items: center;
  z-index:10;
  width: 150px;
  border-radius:50px;
  background-color: rgb(8, 8, 8, 0.2);
  border:0px;
  font-family: "Roboto", sans-serif;
        
}


::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #1E1E1E;
}

::-webkit-scrollbar-thumb {
  background: #875ae0;
}

::-webkit-scrollbar-thumb:hover {
  background: #734dc0;
}


</style>