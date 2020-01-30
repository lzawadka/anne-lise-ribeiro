<template>
    <div class="EightPartImprime">

        <div class="firstPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }">
            <img class="Imprime23" src="./../../assets/pictures/Imprimes/Imprime23.png" alt="">
        </div>

        <div class ="secondPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
            <img v-parallax="-0.15" class="Imprime24" src="./../../assets/pictures/Imprimes/Imprime24.png" alt="">
            <img class="Tenu5" src="./../../assets/pictures/Imprimes/Tenu5.png" alt="">
        </div>
        

    </div>
</template>

<script>

export default {
  name: 'EightPartImprime'
}

</script>

<style type="text/scss" lang="scss" scoped>

.EightPartImprime {
    display: flex;
    flex-direction: column;

    .firstPart {
        height: 100vh;
        width: 100vw;

        img {
            height: 100vh;
            position: absolute;
            right: 0;
        }
    }

    .secondPart {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .Imprime24 {
            position: absolute;
            margin-left: -80px;
        }

        .Tenu5 {
            position: absolute;
            margin-left: 120px;
        }
    }
}

</style>