<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      
      <div class="firstDiv">
        <img v-parallax="-0.15" class="Textile1" src="./../../assets/pictures/Textile/Textile4.png" alt="">
        <div class="firstRectangle"></div>
      </div>

      <div class="secondDiv">
        <img v-parallax="0.05" class="Textile1" src="./../../assets/pictures/Textile/Textile5.png" alt="">
      </div>
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <div class="secondRectangle"></div>
    <img src="./../../assets/pictures/Textile/Textile6.png" alt="">
  </div>
</div>  

</template>

<script>

export default {
  name: 'SecondPartToile'
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
    display: block;
    display: flex;
    flex-direction: row;

    h1 {
      font-size: 150px;
      font-weight: 200;
      margin-top: 47px;
      margin-left: 50px;
      position: absolute;
    }
    
    .firstDiv {
      display: flex;
      width: 60vw;
      height: 100vh;
      position: relative;
      z-index: -1;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

        .firstRectangle {
          background-color: #E2C491;
          height: 100vh;
          width: 30vw;
        }

        .Textile1 {
          position: absolute;
          margin-left: -300px;
          margin-top: 50px;
        }
    }

    .secondDiv {
      width: 40vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .second-part {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 450px;
      max-height: 90vh;
    }

    .secondRectangle {
      background-color: #E2C491;
      height: 100vh;
      width: 33vw;
      position: absolute;
      left: 0;
    }
  }
} 
</style>
