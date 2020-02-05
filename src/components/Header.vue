<template>
  <header>
    <div class="header">
    <router-link class="card-link" to="/" exact><p>Anne-Lise Ribeiro</p></router-link>
    <div class="container-menu">
        <div class="menu" v-on:click="dropDownList(); rotateArrow()">
          <p>Menu</p>
          <img src="./../assets/pictures/arrow.png" id="arrow" class="arrow">
        </div>
    <div id="drop-down-list" class="drop-down-list">
      <ul class="drop-down-list-ul">
        <router-link @click="moveTo" class="card-link" to="/" exact><li>Accueil</li></router-link>
        <router-link @click="moveTo" class="card-link" to="/Shooting" exact><li>Shooting</li></router-link>
        <router-link @click="moveTo" class="card-link" to="/Collection" exact><li>Collection</li></router-link>
        <router-link @click="moveTo" class="card-link" to="/Imprimes" exact><li>Imprimés</li></router-link>
        <router-link @click="moveTo" class="card-link" to="/Inspiration" exact><li>Inspirations</li></router-link>
        <router-link @click="moveTo" class="card-link" to="/Recherches" exact><li>Recherches</li></router-link>
        <router-link @click="moveTo" class="card-link" to="/Toile" exact><li>Toile</li></router-link>
        <router-link @click="moveTo" class="card-link" to="/Textile" exact><li>Textile</li></router-link>
      </ul>
    </div>
  </div>

  </div>
  </header>    
</template>

<script>
export default {
  name: 'HeaderContainer',
  methods:{
    dropDownList : function DropDownList() {
        let element = document.getElementById("drop-down-list");
        element.classList.toggle("show-drop-down-list");
    },
    rotateArrow : function RotateArrow() {
        let element = document.getElementById("arrow");
        element.classList.toggle("arrow-rotate");
    },
    moveTo () {
      let to = this.moveToDown
        ? this.$refs.description.offsetTop - 60
        : 0

      window.scroll({
        top: to,
        left: 0,
        behavior: 'smooth'
      })

    this.moveToDown = !this.moveToDown
}
  }
}


</script>

<style type="text/scss" lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  height: 70px;
  width: 100%;
  background-color: white;
  border-bottom: solid 2px #E2C491;
  position: fixed;
  z-index: 9999;
  opacity: 0.95;
  top: 0%;
    

  .header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85vw;
    font-size: 30px;
    font-weight: 500;

    .card-link {
      text-decoration: none;
      color: black;
    }

    .drop-down-list {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.3s linear;
      background-color: white;
      border: solid 2px #E2C491;
      transition: 0.4s;
      position: absolute;
      top: 100%;
          
      .drop-down-list-ul {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 10px;
        margin-bottom: 10px;

        li {
          line-height: 35px;
          list-style-type: none;
          font-size: 24px;
          }
        }
      }

      li {
        color: black;
        text-decoration: none;
        display: inline-block;
        position: relative;
      }

      li::after {
        content: "";
        position: absolute;
        bottom: 0;
        background: black;
        width: 0;
        height: 2px;
        left: 50%;
        transition: all 0.5s;
      }

      li:hover::after {
        width: 100%;
        left: 0;
      }

      .show-drop-down-list {
          visibility: visible;
          opacity: 1;
          transition: visibility 0.3s opacity 0.3s linear;
      }
  }

  .container-menu {
      height: 35px;
      display: flex;
      flex-direction: column; 
      align-items: center;

      .menu {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          cursor: pointer;
          width: 6vw;

          .arrow {
            transform: rotate(-90deg);
            transition: transform 0.5s;
            width: 25px;
            height: 25px;
          }
      }

      .arrow-rotate {
        transform: rotate(90deg) !important;
        transition: transform 0.3s;
      }
  }
}

@media (max-width: 768px) {
  header {
    display: none;
  }
}
</style>