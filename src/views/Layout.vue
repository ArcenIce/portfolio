<template>
  <div class="layout">
    <!-- <div class="photo"> -->
      
    <!-- </div> -->
    <nav>
      <ul>
        <li><button>Accueil</button></li>
        <li><button>Portfolio</button></li>
        <li><button>A propos</button></li>
      </ul>
    </nav>
    <router-view></router-view>
    <Bubbles></Bubbles>
  </div>
</template>

<script>
import Bubbles from '../components/Bubbles.vue'

export default {
  name: 'layout-v',
  components: {
    Bubbles
  }
}
</script>

<style>

body {
  margin: 0px;
  background-color:#1E1E1E;
}

nav {
  position: absolute;
  background: transparent;
  z-index: 10;
  right: 12vw;
  top: 1vh;
}

li {
  z-index: 10;
  display:inline-flex;
  margin:auto;
  color:white;
  justify-content: center;
  align-items: center;
  z-index:10;
  width: 150px;
  height: 50px;
  border:0px;
  margin-right: 10px;
  transition: all 0.2s;
}

li button {
  width: 100%;
  height:100%;
  background-color: rgb(8, 8, 8, 0.2);
  border:0px;
  border-radius: 50px;
  color:white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align:center;
  transition: all 0.2s;
}

li button:hover {
  background-color: rgb(8, 8, 8, 0.4);
  transform: scale(1.02);
  font-size: 25px;
}

.photo {
  position: absolute;
  background: transparent;
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

.bubbles {
  /* height:2000px; */
  overflow:hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  width:100%;
  z-index: -50;
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