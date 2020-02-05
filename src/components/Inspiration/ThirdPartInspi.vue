<template>
<div class="part-two">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
      <div class="firstDiv">
        <img v-parallax="-0.3" class="Inspiration2" src="./../../assets/pictures/Inspiration/Inspiration2.png" alt="">
        <div class="firstRectangle"></div>
        <p v-parallax="0.15">L’artiste et photographe JR, a influencé ma collection. Il prend en photo des personnes âgées, les peint sur des immeubles abimés par le temps et reprend le tout en photo. Il crée un parrallèle entre l’homme et la société.</p>
        <img v-parallax="-0.3" class="Inspiration3" src="./../../assets/pictures/Inspiration/Inspiration3.png" alt="">
      </div>
      
  </div>
  <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
    <img  v-parallax="0.05" class="Inspiration4" src="./../../assets/pictures/Inspiration/Inspiration4.png" alt="">
    <div class="secondRectangle"></div>
    <p v-parallax="0.15">Pour retranscrire le corps qui vieillit et qui se déforme, j’ai pris en photo des mannequins devant des miroirs déformant pour les retranscrire en mini-moulages.</p>
    <img v-parallax="-0.2" class="Inspiration5" src="./../../assets/pictures/Inspiration/Inspiration5.png" alt="">
  </div>
</div>  

</template>

<script>

export default {
  name: 'ThirdPartToile'
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
        width: 28vw;
        margin-left: -15vw;
      }

      .Inspiration2 {
        height: 50vh;
        position: absolute;
        left: 15vw;
        margin-top: 130px;
      }

      .Inspiration3 {
        height: 50vh;
        position: absolute;
        right: 12vw;
        margin-top: 58vh;
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
        width: 25vw;
        position: absolute;
        right: 20vw;
        z-index: -1;
      }

      .Inspiration4 {
        height: 70vh;
        position: absolute;
        right: 5vw;
        margin-top: 5vh;
      }

      .Inspiration5 {
        height: 60vh;
        position: absolute;
        left: 3vw;
        margin-top: 16vh;
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
