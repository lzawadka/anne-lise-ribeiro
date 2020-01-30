<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
    <div class="firstDiv">
      <img class="Collection8" src="./../../assets/pictures/Collection/Collection8.png" alt="">
      <div class="firstRectangle"></div>
      <img v-parallax="0.15" class="Collection9" src="./../../assets/pictures/Collection/Collection9.png" alt="">
    </div>
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img v-parallax="-0.15" class="Collection11" src="./../../assets/pictures/Collection/Collection11.png" alt="">
    <img class="Collection10" src="./../../assets/pictures/Collection/Collection10.png" alt="">
    <div class="firstRectangle"></div>
  </div>
</div>

</template>

<script>

export default {
  name: 'FirstPartCollection'
}

</script>

<style type="text/scss" lang="scss" scoped>
.part-one {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  z-index: 9;

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
        margin-top: 170px;
        height: 45vh;
        width: 43vw;
      }

      .Collection8 {
        height: 90vh;
        position: absolute;
        left: 20vw;
      }

      .Collection9 {
        height: 70vh;
        position: absolute;
        right: 20vw;
        margin-top: 5vh;
      }
    }
  }

  .second-part {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

      .firstRectangle {
        background-color: #E2C491;
        margin-top: 170px;
        height: 45vh;
        width: 43vw;
      }

      .Collection10 {
        height: 90vh;
        position: absolute;
        right: 20vw;
      }

      .Collection11 {
        height: 70vh;
        position: absolute;
        left: 20vw;
        margin-top: 5vh;
      }
  }
} 
</style>
