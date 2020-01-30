<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <h1>-Imprimés</h1>
      <div class="image-container">
      </div>
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
      <div class="imprimeRectangle">
        <div class="rectangle1"><p>Lorem Ipsum</p></div>
        <img v-parallax="0.15" class="imprime2" src="../../assets/pictures/Imprimes/Imprime2.png" alt="imprime2">
      </div>
      <div>
        <div class="rectangle-grey-1"><img src="../../assets/pictures/Imprimes/Tenu1.png" alt=""></div>

      </div>
  </div>
</div>  

</template>

<script>

export default {
  name: 'FirstPartImprime'
}

</script>

<style type="text/scss" lang="scss" scoped>
.part-one {
  display: flex;
  flex-direction: column;

  .first-part {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding-top: 0.1vh;
    display: block;

    h1 {
      font-size: 150px;
      font-weight: 200;
      z-index: -2;
      margin-top: 47px;
      margin-left: 50px;
    }

    .image-container {
      background-image: url('../../assets/pictures/Imprimes/Imprime1.png');
      background-repeat: no-repeat;
      background-size: cover;
      width: 100vw;
      height: 76%;
    }
  }

  .second-part {
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

    .imprimeRectangle {
      width: 60vw;
      display: flex;
      justify-content: center;
      align-items: center;

      .rectangle1 {
        width: 75vw;
        height: 15vh;
        background-color: #E2C491; 
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;

      p {
        font-size: 70px;
      }
    }

    .imprime2 {
      height: 60vh;
      width: 45vw;
    }
    }
    

    .rectangle-grey-1 {
      height: 100vh;
      width: 35vw;
      background-color: #C4C4C4;
      opacity: 0.58;
      position: absolute;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 100vh;
      }
    }
  }
}

</style>