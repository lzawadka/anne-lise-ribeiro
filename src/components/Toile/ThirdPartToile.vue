<template>
<div class="part-three">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <div class="firstDiv">
        <img v-parallax="-0.3" class="toile8" src="./../../assets/pictures/Toile/Toile8.png" alt="">
        <div class="firstRectangle"></div>
        <p v-parallax="0.25">Une doudoune revisitée, avec un coté oversize qui efface le corps et le fait disparaitre.</p>
      </div>
      
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img  v-parallax="0.15" class="toile9" src="./../../assets/pictures/Toile/Toile9.png" alt="">
    <div class="secondRectangle"></div>
    <img v-parallax="-0.2" class="toile10" src="./../../assets/pictures/Toile/Toile10.png" alt="">
  </div>
</div>  

</template>

<script>

export default {
  name: 'ThirdPartToile'
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

    .firstDiv {  
      display: flex;
      flex-direction: row;
      justify-content: center;

      .firstRectangle {
        background-color: #E2C491;
        height: 100vh;
        width: 27vw;
        position: absolute;
        right: 0;
      }

      .toile8 {
        height: 65vh;
        position: absolute;
        margin-left: -25vw;
        margin-top: 13vh;
      }

      p {
        position: absolute;
        letter-spacing: 0.2vw;
        width: 35vw;
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
        width: 43vw;
        position: relative;
        z-index: -1;
      }

      .toile9 {
        height: 65vh;
        position: absolute;
        left: 10vw;
        margin-top: 140px;
      }

      .toile10 {
        height: 80vh;
        position: absolute;
        right: 10vw;
        margin-top: 150px;
      }
  }
} 
</style>
