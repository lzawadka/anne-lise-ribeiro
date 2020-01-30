<template>
  <div class="startPage">
    <div class="firstParagraph"><p class="titleMainPage">Le temps</p></div>
    <div class="rectangleMiddle"></div>
    <div class="secondParagraph"><p class="titleMainPage">Qui coule</p></div>
    <div class="name"><p>Anne-Lise Ribeiro</p></div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/scss" lang="scss" scoped>

@keyframes fromLeft {
  from {
    transform: translate(-100vw, 3vw);
  } 
  to {
    transform: translate(-30vw, 3vw);
  }
}

@keyframes fromRight {
  from {
    transform: translate(100vw, -8vw);
  } 
  to {
    transform: translate(30vw, -8vw);
  }
}

  .startPage {
    background-image: url("../../assets/pictures/background.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    .firstParagraph {
      transform: translate(-30vw, 3vw);
      animation: 3s ease fromLeft;
    }

    .secondParagraph {
      transform: translate(30vw, -8vw);
      animation: 3s ease fromRight;

      &:before {
        content: "";
        display: block;
        width: 14vw;
        height: 0.4vh;
        background-color: black;
        position: relative;
        top: 58%;
        right: 70%;
      }
    }

    .name {
      transform: translateY(10vh);
      font-size: 3em;
      line-height: 0%;
    }

    .titleMainPage {
      font-size: 6em;
    }

    .rectangleMiddle {
      background-color: #E2C491;
      width: 70vw;
      height: 50vh;
    }
  }
</style>
