<template>
  <div class="first-part">
      <h1>-Shooting</h1>
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }"  class="image-container">
          <img v-parallax="0.05" class="Shooting1" src="../../assets/pictures/Shooting/Shooting1.png">
        </div>
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }"  class="shooting-container">
          <img  class="Shooting" src="../../assets/pictures/Shooting/Shooting2.png">
        </div>
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }"  class="shooting-container">
          <img  class="Shooting" src="../../assets/pictures/Shooting/Shooting3.png">
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
  padding-top: 0.1vh;

h1 {
    font-size: 150px;
    font-weight: 200;
    margin-top: 47px;
    margin-left: 50px;
    position: absolute;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: -1;

    .Shooting1 {
      position: absolute;
      height: 84vh;
      margin-top: 2vh;
    }
  }
  .shooting-container {
      height: 100vh;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;

      .Shooting {
        position: relative;
        height: 85vh;
      }
    }

  
}

</style>