<template>
  <router-view/>
  <footer>
    Hello all
  </footer>
</template>

<script>
export default {
  name: "App",
}
</script>

<style lang="scss">

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  
  margin: 0;
  padding: 0;
  overflow: hidden;

  background-color: rgb(38, 38, 38);
}

main {
  width: 100%;
  height: 100%;
  font-family: Roboto;
  overflow: hidden;
}

footer {
  position: fixed;
  bottom: 0;

  height: 50px;
  width: 100vw;
  width: 100dvw; //Override with device view width

  background-color: #F9C823;
}

</style>
