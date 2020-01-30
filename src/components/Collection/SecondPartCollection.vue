<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
    <div class="firstDiv">
      <img v-parallax="0.4" class="Collection5" src="./../../assets/pictures/Collection/Collection5.png" alt="">
      <img class="Collection6" src="./../../assets/pictures/Collection/Collection6.png" alt="">
    </div>
  </div>
  <div class="background-color">
    <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
      <img class="Collection7" src="./../../assets/pictures/Collection/Collection7.png" alt="">
    </div>
  </div>
</div>  

</template>

<script>

export default {
  name: 'SecondPartCollection'
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
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      overflow: hidden;

      .firstRectangle {
        background-color: #E2C491;
        margin-top: 170px;
        height: 45vh;
        width: 43vw;
        margin-left: -250px;
      }

      .Collection5 {
        height: 100vh;
        width: 100vw;
        position: absolute;
        z-index: -1;
      }

      .Collection6 {
        min-height: 95vh;
        max-height: 100vh;
        left: 5vw;
        position: absolute;
        margin-top: -30px;
      }

      p {
        padding: 20px;
        border: 3px solid black;
        position: absolute;
        letter-spacing: 0.2vw;
        width: 30vw;
        line-height: 4vh;
        font-size: 30px;
        margin-top: 350px;
        margin-left: 250px;
        z-index: 2;
      }
    }
  }

.background-color {
  z-index: 98;
  position: relative;
  background-color: white;
}

  .second-part {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

      .secondRectangle {
        background-color: #E2C491;
        height: 45vh;
        width: 43vw;
        margin-left: 100px;
        margin-top: 370px;
      }

      .Collection7 {
        height: 100vh;
        position: absolute;
        right: 0;
        margin-top: 5px;
      }
  }
} 
</style>
