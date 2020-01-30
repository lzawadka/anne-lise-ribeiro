<template>
    <div class="sixth-part">
      <div class="first-container">
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection8.png" alt=""></carte>
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection21.png" alt=""></carte>
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection20.png" alt=""></carte>
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection10.png" alt=""></carte>
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection22.png" alt=""></carte>
      </div>

      <div class="first-container">
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection24.png" alt=""></carte>
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection25.png" alt=""></carte>
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection26.png" alt=""></carte>
        <carte class="styleObject1"><img src="./../../assets/pictures/Collection/Collection27.png" alt=""></carte>
        <carte class="styleObject2"><img src="./../../assets/pictures/Collection/Collection23.png" alt=""></carte>
      </div>
    </div>
</template>

<script>
import Carte from './Carte'

export default {
  name: 'SixthPartCollection',
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
