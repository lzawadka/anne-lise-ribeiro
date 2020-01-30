<template>
<div class="part-one">
  <div class="first-part" v-scroll-reveal.reset="{ delay: 150 }">
    <div class="firstDiv">
      <img class="Collection17" src="./../../assets/pictures/Collection/Collection17.png" alt="">
      <img class="Collection18" src="./../../assets/pictures/Collection/Collection18.png" alt="">
    </div>
  </div>
  <div class="second-part">
    <div class="collection-container" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
      <img class="Collection19" src="./../../assets/pictures/Collection/Collection19.png" alt="">
    </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'ForthPartCollection'
}

</script>

<style type="text/scss" lang="scss" scoped>
.part-one {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  z-index: 9;

  .first-part {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: block;

    .firstDiv {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .Collection17 {
        height: 100vh;
        width: 100vw;
        position: absolute;
      }

      .Collection18 {
        height: 100vh;
        position: absolute;
        z-index: 1;
        right: 5vw;
      }
    }
  }

  .collection-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .second-part {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

      .Collection19 {
        height: 100vh;
        position: absolute;
      }

      
  }
} 
</style>
