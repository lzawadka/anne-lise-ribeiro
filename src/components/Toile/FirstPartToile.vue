<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <h1>-Toile</h1>
      <div class="firstDiv">
        <img v-parallax="-0.3" class="toile1" src="./../../assets/pictures/Toile/Toile1.png" alt="">
        <div class="firstRectangle"></div>
        <img v-parallax="0.25" class="toile2" src="./../../assets/pictures/Toile/Toile2.png" alt="">
        <p>Le jogging, une pièce confortable qui se recroqueville et se plisse avec le temps qui passe.
              Une forme qui plisse et nous donne envie de nous relâcher.</p>
      </div>
      
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img  v-parallax="0.05" class="toile3" src="./../../assets/pictures/Toile/Toile3.png" alt="">
    <div class="secondRectangle"></div>
    <img v-parallax="-0.3" class="toile4" src="./../../assets/pictures/Toile/Toile4.png" alt="">
  </div>
</div>  

</template>

<script>

export default {
  name: 'FirstPartToile'
}

</script>

<style type="text/scss" lang="scss" scoped>
.part-one {
  margin-top: 70px;
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
      margin-left: 50px;
    }

    .firstDiv {  
      display: flex;
      flex-direction: row;
      justify-content: center;

      .firstRectangle {
        background-color: #E2C491;
        height: 100vh;
        width: 43vw;
      }

      .toile1 {
        height: 50vh;
        position: absolute;
        left: 15vw;
        margin-top: 230px;
      }

      .toile2 {
        height: 50vh;
        position: absolute;
        right: 20vw;
        margin-top: 35px;
      }

      p {
        position: absolute;
        letter-spacing: 0.2vw;
        width: 30vw;
        line-height: 28px;
        font-size: 30px;
        margin-top: 45vh;
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
        width: 20vw;
        margin-left: 314px;
      }

      .toile3 {
        height: 74vh;
        position: absolute;
        left: 10vw;
        margin-top: 60px;
      }

      .toile4 {
        height: 50vh;
        position: absolute;
        right: 18vw;
        margin-top: 250px;
      }
  }
} 
</style>
