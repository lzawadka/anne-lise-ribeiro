<template>
  <div class="first-part">
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }"  class="rectangle-container">
          <img class="Inspiration1" src="./../../assets/pictures/Inspiration/Inspiration1.png" alt="">
          <p v-parallax="0.25" class="firstWord">Ternissement</p>
          <p v-parallax="-0.05" class="secondWord">Fletrissement</p>
          <p v-parallax="-0.25" class="thirdWord">Déformation</p>
          <p v-parallax="0.15" class="forthWord">Épuisement</p>
        </div>
  </div>

</template>

<script>

export default {
    name: 'SecondPartRecherches'
}

</script>

<style type="text/scss" lang="scss" scoped>

.first-part {
  width: 100vw;
  padding-top: 0.1vh;

  .rectangle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: -1;

    .Inspiration1 {
      height: 75vh;
      width: 65vw;
    }

    .firstWord {
      position: absolute;
      padding: 1vw;
      font-weight: bold;
      font-size: 64px;
      left: 5vw;
      margin-top: -15vh;
    }

    .secondWord {
      position: absolute;
      padding: 1vw;
      font-weight: bold;
      font-size: 40px;
      right: 20vw;
      margin-top: -37vh;
    }

    .thirdWord {
      position: absolute;
      padding: 1vw;
      font-weight: bold;
      font-size: 40px;
      left: 40vw;
      margin-top: 32vh;
    }

    .forthWord {
      position: absolute;
      padding: 1vw;
      font-weight: bold;
      right: 1vw;
      font-size: 60px;
    }
  }
}

</style>