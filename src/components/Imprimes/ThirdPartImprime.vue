<template>
    <div class="thirdPartImprime">
        <div class ="secondPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
            <div class="firstDivSecondPart">
                <img v-parallax="0.15" class="imprime8" src="./../../assets/pictures/Imprimes/Imprime8.png" alt="">
                <div class="rectangle-grey-4"></div>
                <img v-parallax="-0.15" class="imprime9" src="./../../assets/pictures/Imprimes/Imprime9.png" alt="">
            </div>
            <div class="secondDivSecondPart">
                <img src="./../../assets/pictures/Imprimes/Tenu3.png" alt="">
            </div>
        </div>
        <div class="firstPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
            <div class="tenu2">
                <img src="./../../assets/pictures/Imprimes/Tenu2.png" alt="tenu2">
            </div>
            <div class="imprime7">
                <img src="./../../assets/pictures/Imprimes/Imprime7.png" alt="">
            </div>
        </div>

    </div>
</template>

<script>

export default {
  name: 'ThirdPartImprime'
}

</script>

<style type="text/scss" lang="scss" scoped>
.thirdPartImprime {
    display: flex;
    flex-direction: column;

    .firstPart {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;

        .tenu2 {
            height: 100vh;
            width: 50vw;
            position: relative;
            left: 2vw;

            img {
                height: 100vh;
                left: 7vw;
                position: relative;
            }
        }

        .imprime7 {
            height: 100vh;
            width: 50vw;
            position: relative;
            left: 2vw;
            display: flex;
            align-items: center;

            img {
                height: 90vh;
                right: 5vw;
                position: absolute;
            }
        }
    }

    .secondPart {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;

        .firstDivSecondPart {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70vw;
            height: 100vh;

            .imprime9 {
                width: 25vw;
                margin-top: 300px;
            }

            .imprime8 {
                width: 25vw;
                margin-top: -150px;
            }

            .rectangle-grey-4 {
                display: block;
                height: 100vh;
                width: 20vw;
                background-color: #C4C4C4;
                opacity: 0.58;
                position: absolute;
                z-index: -1;
            }
        }

        .secondDivSecondPart {
            height: 100vh;

            img {
                height: 100vh;
                position: relative;
                right: 5vw;
            }
        }
    }
}

</style>
