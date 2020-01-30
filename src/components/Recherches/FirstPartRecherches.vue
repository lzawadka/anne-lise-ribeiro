<template>
  <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }" class="first-part">
      <h1>-Recherches</h1>
        <div  class="image-container">
          <img v-parallax="0.15" class="mannequin1" src="../../assets/pictures/Recherches/Mannequin3.png">
          <img v-parallax="-0.25" class="mannequin2" src="../../assets/pictures/Recherches/Mannequin2.png">
          <img v-parallax="0.10" class="mannequin3" src="../../assets/pictures/Recherches/Mannequin1.png">
        </div>
  </div>

</template>

<script>

export default {
    name: 'FirstPartRecherches'
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
    position: relative;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .mannequin1 {
      margin-left: -200px;
      margin-top: 145px;
      position: absolute;
      // transform: translate(50px, -100px);
      height: 65vh;
    }

    .mannequin2 {
      margin-top: 340px;
      //transform: translate(0px, 60px);
      height: 40vh;
      position: absolute;
    }

    .mannequin3 {    
      margin-left: 197px;
      margin-top: 128px;
      height: 55vh;
      position: absolute;
      z-index: -1;
    }

    img {
      opacity: 0.80;
    }
  }

  
}

</style>