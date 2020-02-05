<template>
  <div id="app">
    <header-container class="header"/>
      <router-view class="router"/>
    <footer-container class="footer"/>
    <div class="onMobile">
      <div>
        <p>Le site n'est toujours pas disponible sur mobile veuillez revenir sur mobile.</p>
      </div>
    </div>
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

<style type="text/scss" lang="scss">
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

.onMobile {
  display: none;
  visibility: hidden;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #E2C491; 
    overflow: hidden;
  }

  p {
    font-weight: 800;
    width: 90vw;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .onMobile {
    display: block;
    visibility: visible;
  }

  .router {
    display: none;
  }

  .header {
    display: none;
  }

  .footer {
    display: none;
  }
}

</style>