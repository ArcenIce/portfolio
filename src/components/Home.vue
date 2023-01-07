<template>
  <div class="home">
    <div class="titles">
      <h1 id="portf">PORTFOLIO</h1>
      <h1 id="name">Alex Lovergne</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home-v',
}
</script>

<style>

.home {
  width: 100vw;
  font-size: 32px;
  letter-spacing: 6px;
}



.titles h1 {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: transparent;
  width: 100vw;
}

#portf {
  margin-top: 350px;
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

</style>