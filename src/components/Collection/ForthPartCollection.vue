<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
    <div class="firstDiv">
      <img class="Collection12" src="./../../assets/pictures/Collection/Collection12.png" alt="">
      <div class="firstRectangle"></div>
    </div>
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img v-parallax="-0.15" class="Collection13" src="./../../assets/pictures/Collection/Collection13.png" alt="">
    <img v-parallax="0.15" class="Collection14" src="./../../assets/pictures/Collection/Collection14.png" alt="">
    <img v-parallax="0.15" class="Collection15" src="./../../assets/pictures/Collection/Collection15.png" alt="">
    <img v-parallax="-0.15" class="Collection16" src="./../../assets/pictures/Collection/Collection16.png" alt="">
    <div class="firstRectangle"></div>
  </div>
</div>

</template>

<script>

export default {
  name: 'ForthPartCollection'
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
        position: absolute;
        z-index: -1;
        right: 10vw;
        height: 45vh;
        width: 43vw;
      }

      .Collection12 {
        height: 90vh;
        position: absolute;
      }
    }
  }

  .second-part {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

      .firstRectangle {
        background-color: #C2C2C2;
        margin-top: 75vh;
        position: absolute;
        z-index: -1;
        height: 3vh;
        width: 85vw;
      }

      .Collection13 {
        height: 80vh;
        position: absolute;
        left: 10vw;
      }

      .Collection14 {
        height: 80vh;
        position: absolute;
        left: 30vw;
        margin-top: 10vh;
      }

      .Collection15 {
        height: 80vh;
        position: absolute;
        right: 10vw;
        margin-top: 10vh;
      }

      .Collection16 {
        height: 80vh;
        position: absolute;
        right: 30vw;
      }
  }
} 
</style>
