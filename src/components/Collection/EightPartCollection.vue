<template>
    <div class="sixth-part">
      <div class="first-container">
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection38.png" alt=""></carte>
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection40.png" alt=""></carte>
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection41.png" alt=""></carte>
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection39.png" alt=""></carte>
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection42.png" alt=""></carte>
      </div>

      <div class="first-container">
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection43.png" alt=""></carte>
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection44.png" alt=""></carte>
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection4.png" alt=""></carte>
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection3.png" alt=""></carte>
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection15.png" alt=""></carte>
      </div>
    </div>
</template>

<script>
import Carte from './Carte'

export default {
  name: 'EightPartCollection',
  components: {
    Carte
  }
}
</script>

<style type="text/scss" lang="scss" scoped>

.sixth-part {
    height: 100vh;

    .styleObject1 {
      background-color: #E2C491;
      opacity: 0.9;
      position: relative;
      z-index: 99;
      transition: 0.5s;

      img {
        position: relative;
        z-index: 2;
        height: 45vh;
      }
      &:hover {
        transform: scale(1.5);
        z-index: 999;
      }
    }

    .styleObject2 {
      background-color: #ffffff;
      opacity: 0.9;
      position: relative;
      z-index: 99;
      transition: 0.5s;

      img {
        position: relative;
        z-index: 2;
        height: 45vh;
      }

      &:hover {
        transform: scale(1.5);
        z-index: 999;
      }
    }

    .first-container {
      display: flex;
      flex-direction: row;
      width: 100vw;
      justify-content: space-around;
      height: 50vh;
      align-items: cenetr;
    }
}

</style>
