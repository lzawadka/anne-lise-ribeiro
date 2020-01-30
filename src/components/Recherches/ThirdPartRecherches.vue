<template>
  <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class="first-part">
        <div class="image-container">
            <img v-parallax="-0.25" class="recherche4" src="../../assets/pictures/Recherches/Recherche4.png">
            <img v-parallax="0.20" class="recherche3" src="../../assets/pictures/Recherches/Recherche3.png">
            <img v-parallax="-0.25" class="recherche2" src="../../assets/pictures/Recherches/Recherche2.png">
            <img v-parallax="0.15" class="recherche1" src="../../assets/pictures/Recherches/Recherche1.png">
        </div>
  </div>

</template>

<script>

export default {
    name: 'ThirdPartRecherches'
}

</script>

<style type="text/scss" lang="scss" scoped>

.first-part {
  width: 100vw;
  height: 100vh;
  padding-top: 0.1vh;

  h1 {
    font-size: 150px;
    font-weight: 200;
    z-index: -2;
    margin-top: 47px;
    margin-left: 50px;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .recherche1 {
      margin-left: 465px;
      
      margin-top: 400px;
      position: absolute;
      //transform: translate(30px, 150px);
      height: 60vh;
      z-index: -1;
    }

    .recherche2 {
      margin-left: 200px;
      margin-top: 445px;
      position: absolute;
      //transform: translate(90px, 60px);
      z-index: 1;
      height: 70vh;
    }

    .recherche3 {
      margin-left: -200px;
      margin-top: 245px;
      position: absolute;
      //transform: translate(-150px, -60px);
      z-index: 1;
      height: 50vh;
    }

    .recherche4 {
      margin-left: -373px;
      margin-top: 500px;
      position: absolute;
      //transform: translate(-120px, 100px);
      height:70vh;
    }

    img {
      opacity: 0.80;
    }
  }

  
}

</style>