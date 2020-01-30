<template>
  <div class="first-part">
      <h1>-Inspiration</h1>
        <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }"  class="rectangle-container">
          <div v-parallax="-0.35" class="firstRectangle"><p>C4C4C4</p></div>
          <div v-parallax="0.15" class="secondRectangle"><p>E2C491</p></div>
          <div v-parallax="-0.25" class="thirdRectangle"><p>BCA071</p></div>
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

  .rectangle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: -1;

    .firstRectangle {
      height: 30vh;
      width: 13vw;
      position: absolute;
      z-index: 1;
      background-color: #C4C4C4;
      margin-left: -15vw;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      p {
        padding: 1vw;
        font-weight: bold;
      }
    }

    .secondRectangle {
      height: 55vh;
      width: 22vw;
      position: absolute;
      z-index: -1;
      background-color: #E2C491;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      p {
        padding: 1.5vw;
        font-weight: bold;
      }
    }

    .thirdRectangle {
      height: 45vh;
      width: 20vw;
      position: absolute;
      z-index: 1;
      background-color: #BCA071;
      margin-left: 20vw;
      margin-top: 14vh;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      p {
        padding: 1vw;
        font-weight: bold;
      }
    }
  }
}

</style>