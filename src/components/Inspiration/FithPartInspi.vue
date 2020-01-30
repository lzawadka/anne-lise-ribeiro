<template>
<div class="part-two">
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img  v-parallax="0.15" class="Inspiration11" src="./../../assets/pictures/Inspiration/Inspiration11.png" alt="">
    <div class="secondRectangle"></div>
    <img v-parallax="-0.25" class="Inspiration10" src="./../../assets/pictures/Inspiration/Inspiration10.png" alt="">
    <p>Pour creer mes imprimés, je me suis interrésés aux tatouages de tribus qui sont sensé protégés la peau </p>
  </div>

  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
    <div class="firstDiv">
      <img class="Inspiration9" src="./../../assets/pictures/Inspiration/Inspiration9.png" alt="">
    </div>
  </div>
</div>  

</template>

<script>

export default {
  name: 'FithPartInspi'
}

</script>

<style type="text/scss" lang="scss" scoped>
.part-two {
  display: flex;
  flex-direction: column;

  .first-part {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: block;

    h1 {
      position: absolute;
      font-size: 150px;
      font-weight: 200;
      z-index: 2;
      margin-top: 47px;
      margin-left: 50px;
    }

    .firstDiv {  
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .Inspiration9 {
        height: 95vh;
      }
    }
  }

  .second-part {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

      .secondRectangle {
        background-color: #E2C491;
        height: 100vh;
        width: 30vw;
        position: absolute;
        z-index: -1;
        left: 20vw;
      }

      .Inspiration10 {
        height: 55vh;
        position: absolute;
        right: 10vw;
        margin-top: 50vh;
      }

      .Inspiration11 {
        height: 75vh;
        position: absolute;
        left: 8vw;
        margin-top: 10vh;
      }

      p {
        position: absolute;
        letter-spacing: 0.3vw;
        width: 40vw;
        line-height: 30px;
        font-size: 30px;
        margin-top: 20vh;
        right: 5vw;
        z-index: 2;
      }
  }
} 
</style>
