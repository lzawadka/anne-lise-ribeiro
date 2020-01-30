<template>
<div class="part-three">
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img  v-parallax="0.2" class="toile11" src="./../../assets/pictures/Toile/Toile11.png" alt="">
    <div class="secondRectangle"></div>
    <img v-parallax="-0.1" class="toile12" src="./../../assets/pictures/Toile/Toile12.png" alt="">
  </div>

  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <div class="firstDiv">
        <img v-parallax="-0.3" class="toile13" src="./../../assets/pictures/Toile/Toile13.png" alt="">
        <div class="firstRectangle"></div>
        <p v-parallax="0.25">Cette robe est aspirée au niveau du ventre grace à des debut de pince comme un corp qui prend forme et degouline autour.</p>
      </div>
  </div>
</div>  

</template>

<script>

export default {
  name: 'ForthPartToile'
}

</script>

<style type="text/scss" lang="scss" scoped>
.part-three {
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
      display: flex;
      flex-direction: row;
      justify-content: center;

      .firstRectangle {
        background-color: #E2C491;
        height: 100vh;
        width: 30vw;
        position: absolute;
        left: 24vw;
      }

      .toile13 {
        height: 65vh;
        z-index: 2;
        position: absolute;
        margin-left: -25vw;
        margin-top: 13vh;
      }

      p {
        position: absolute;
        letter-spacing: 0.2vw;
        width: 40vw;
        line-height: 28px;
        font-size: 30px;
        margin-top: 130px;
        margin-left: 250px;
        z-index: 2;
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
        width: 25vw;
        position: absolute;
        left: 0;
        z-index: -1;
      }

      .toile11 {
        height: 55vh;
        position: absolute;
        left: 10vw;
        margin-top: 140px;
      }

      .toile12 {
        height: 80vh;
        position: absolute;
        right: 10vw;
        margin-top: 10vh;
      }
  }
} 
</style>
