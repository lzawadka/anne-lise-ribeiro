<template>
  <div class="first-part">
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }"  class="image-container">
          <img v-parallax="0.05" class="Shooting1" src="../../assets/pictures/Shooting/Shooting4.png">
        </div>
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }"  class="shooting-container">
          <img  class="Shooting" src="../../assets/pictures/Shooting/Shooting5.png">
        </div>
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }"  class="shooting-container">
          <img  class="Shooting" src="../../assets/pictures/Shooting/Shooting6.png">
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
      height: 90vh;
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