<template>
<div class="part-two">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <div class="firstDiv">
        <img class="Inspiration6" src="./../../assets/pictures/Inspiration/Inspiration6.png" alt="">
      </div>
      
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img  v-parallax="0.15" class="Inspiration7" src="./../../assets/pictures/Inspiration/Inspiration7.png" alt="">
    <div class="secondRectangle"></div>
    <img v-parallax="-0.4" class="Inspiration8" src="./../../assets/pictures/Inspiration/Inspiration8.png" alt="">
  </div>
</div>  

</template>

<script>

export default {
  name: 'ForthPartToile'
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

      .Inspiration6 {
        height: 85vh;
      }


      p {
        position: absolute;
        letter-spacing: 0.3vw;
        width: 50vw;
        line-height: 30px;
        font-size: 30px;
        margin-top: 13vh;
        margin-left: 25vw;
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
        width: 30vw;
        position: absolute;
        z-index: -1;
      }

      .Inspiration8 {
        height: 45vh;
        position: absolute;
        right: 5vw;
        margin-top: 55vh;
      }

      .Inspiration7 {
        height: 60vh;
        position: absolute;
        left: 3vw;
        margin-top: 10vh;
      }

      p {
        position: absolute;
        letter-spacing: 0.3vw;
        width: 60vw;
        line-height: 30px;
        font-size: 30px;
        margin-top: 65vh;
        margin-left: -15vw;
        z-index: 2;
      }
  }
} 
</style>
