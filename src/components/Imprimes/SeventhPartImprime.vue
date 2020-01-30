<template>
    <div class="SeventhPartImprime">

        <div class="firstPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }">
            <img v-parallax="-0.15" class="Imprime20" src="./../../assets/pictures/Imprimes/Imprime20.png" alt="">
            <div class="rectangleGrey"></div>
            <img v-parallax="0.05" class="Imprime19" src="./../../assets/pictures/Imprimes/Imprime19.png" alt="">
        </div>

        <div class ="secondPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
            <img class="Imprime21" src="./../../assets/pictures/Imprimes/Imprime21.png" alt="">
            <img v-parallax="-0.15" class="Imprime22" src="./../../assets/pictures/Imprimes/Imprime22.png" alt="">
        </div>
        

    </div>
</template>

<script>

export default {
  name: 'SeventhPartImprime'
}

</script>

<style type="text/scss" lang="scss" scoped>

.SeventhPartImprime {
    display: flex;
    flex-direction: column;

    .firstPart {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        .rectangleGrey {
            height: 100vh;
            width: 30vw;
            background-color: #C4C4C4;
            opacity: 0.58;
            position: absolute;
            z-index: -1;
        }

        .Imprime19 {
            position: absolute;
            right: 15px;
            margin-top: 100px;
        }

        .Imprime20 {
            position: absolute;
            left: 0;
            margin-top: -110px;
        }
    }

    .secondPart {
        height: 100vh;
        width: 100vw;

        .Imprime22 {
            position: absolute;
            left: 155px;
            margin-top: 150px;
        }

        .Imprime21 {
            height: 100vh;
            width: 95vw;
        }
    }
}

</style>