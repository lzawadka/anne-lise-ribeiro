<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
    <h1>-Collection</h1>
    <div class="firstDiv">
      <img class="Collection1" src="./../../assets/pictures/Collection/Collection1.png" alt="">
      <div class="firstRectangle"></div>
      <p></p>
    </div>
      
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img class="Collection3" src="./../../assets/pictures/Collection/Collection3.png" alt="">
    <img class="Collection4" src="./../../assets/pictures/Collection/Collection4.png" alt="">
    <p v-parallax="0.25" class="text1">Flétrissement</p>
    <div class="secondRectangle"></div>
    <p v-parallax="-0.25" class="text2">Relâchement</p>
    <img v-parallax="0.15" class="Collection2" src="./../../assets/pictures/Collection/Collection2.png" alt="">
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
        margin-top: 17vh;
        height: 45vh;
        width: 43vw;
        margin-left: -250px;
      }

      .Collection1 {
        height: 100vh;
        width: 100vw;
        position: absolute;
      }

      p {
        padding: 20px;
        border: 3px solid black;
        position: absolute;
        letter-spacing: 0.2vw;
        width: 30vw;
        height: 30vh;
        line-height: 4vh;
        font-size: 30px;
        margin-top: 40vh;
        margin-left: 19vw;
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
        height: 45vh;
        width: 43vw;
        margin-left: 100px;
        margin-top: 37vh;
      }

      .Collection2 {
        height: 74vh;
        position: absolute;
        right: 20px;
        margin-top: 60px;
      }

      .Collection3 {
        margin-top: 5vh;
        height: 95vh;
        position: absolute;
        left: 0;
      }

      .Collection4 {
        height: 60vh;
        position: absolute;
        left: 20vw;
        margin-top: 33vh;
      }

      .text1 {
        position: absolute;
        margin-top: 8vh;
        margin-left: 18vw;
        font-size: 30px;
        z-index: 2;
      }

      .text2 {
        position: absolute;
        margin-top: 65vh;
        margin-right: 10vw;
        font-size: 30px;
      }
  }
} 
</style>
