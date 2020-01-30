<template>
<div class="part-two">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <div class="firstDiv">
        <img v-parallax="-0.3" class="toile5" src="./../../assets/pictures/Toile/Toile5.png" alt="">
        <div class="firstRectangle"></div>
        <p v-parallax="0.25">La robe chemise, une mini robe qui s’ecroule et s’affaisse comme une peau qui tomberait avec le temps et creer une comparaison avec le coté lisse.  </p>
      </div>
      
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img  v-parallax="0.15" class="toile6" src="./../../assets/pictures/Toile/Toile6.png" alt="">
    <div class="secondRectangle"></div>
    <img v-parallax="-0.3" class="toile7" src="./../../assets/pictures/Toile/Toile7.png" alt="">
  </div>
</div>  

</template>

<script>

export default {
  name: 'SecondPartToile'
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
      display: flex;
      flex-direction: row;
      justify-content: center;

      .firstRectangle {
        background-color: #E2C491;
        height: 100vh;
        width: 27vw;
        margin-left: -100px;
      }

      .toile5 {
        height: 65vh;
        position: absolute;
        left: 15vw;
        margin-top: 130px;
      }

      p {
        position: absolute;
        letter-spacing: 0.2vw;
        width: 30vw;
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

      .toile6 {
        height: 65vh;
        position: absolute;
        left: 10vw;
        margin-top: 160px;
      }

      .toile7 {
        height: 80vh;
        position: absolute;
        right: 10vw;
        margin-top: 50px;
      }
  }
} 
</style>
