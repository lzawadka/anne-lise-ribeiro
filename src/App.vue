<template>
  <div id="app">
    <header-container />
      <router-view/>
    <footer-container />
  </div>
</template>

<script>
import HeaderContainer from './components/Header'
import FooterContainer from './components/Footer'

export default {
  name: 'App',
  components: {
    HeaderContainer,
    FooterContainer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
body {
  margin: 0;
  /*overflow: hidden;*/
  overflow-x: hidden;
  font-family: 'Raleway', sans-serif;
}
div {
  margin: 0;
}
p {
  margin: 0;
}
h1 {
  margin: 0;
}
.card-link {
  text-decoration: none;
}
</style>