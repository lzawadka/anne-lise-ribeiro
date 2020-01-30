<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <h1>-Textile</h1>
      <div class="firstDiv">
        <img v-parallax="-0.15" class="Textile1" src="./../../assets/pictures/Textile/Textile1.png" alt="">
        <div class="firstRectangle"></div>
        <img v-parallax="0.15" class="Textile2" src="./../../assets/pictures/Textile/Textile2.png" alt="">
      </div>
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
      <img src="./../../assets/pictures/Textile/Textile3.png" alt="">
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
      margin-top: 47px;
      margin-left: 50px;
      position: absolute;
    }
    
    .firstDiv {
      display: flex;
      width: 100vw;
      height: 100vh;
      position: relative;
      z-index: -1;
      flex-direction: row;
      align-items: center;
      justify-content: center;

        .firstRectangle {
          background-color: #E2C491;
          height: 100vh;
          width: 43vw;
        }

        .Textile1 {
          position: absolute;
          margin-left: -300px;
          margin-top: 50px;
        }

        .Textile2 {
          position: absolute;
          margin-left: 400px;
        }
    }
  }

  .second-part {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 100vh;
    }
  }
} 
</style>
