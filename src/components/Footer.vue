<template>
    <footer>
        <div class="footer">
            <p>Contact : anne-lise-ribeiro@hotmail.com</p>
            <p class="copyright">© All right reserved Anne-Lise Ribeiro</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterContainer'
}
</script>

<style type="text/scss" lang="scss" scoped>
footer {
  display: block;
  height: 8vh;
  width: 100vw;
  border-top: solid 2px #E2C491;
  background-color: white;
  cursor: default;

  .footer {
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    font-size: 18px;
  }

  .copyright {
    font-size: 18px;
    width: 20vw;
    text-align: center;
  }
}

@media (max-width: 768px) {
  footer {
    display: none;
  }
}
</style>