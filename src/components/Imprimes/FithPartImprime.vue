<template>
    <div class="FithPartImprime">

        <div class="firstPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }">
            <div class="imprimeDouble">
                <img class="Imprime11" src="./../../assets/pictures/Imprimes/Imprime11.png" alt="">
                <img src="./../../assets/pictures/Imprimes/Imprime12.png" alt="">
            </div>

            <div class="imprimeGrand">
                <div class="rectangleGrey"></div>
                <img v-parallax="0.2" src="./../../assets/pictures/Imprimes/Imprime13.png" alt="">
            </div>
        </div>

        <div class ="secondPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
            <div class="firstRectangle" ><img v-parallax="0.2" src="./../../assets/pictures/Imprimes/Imprime16.png" alt=""></div>
            <div class="secondRectangle"><img v-parallax="-0.05" src="./../../assets/pictures/Imprimes/Imprime15.png" alt=""></div>
            <div class="thirdRectangle"><img v-parallax="0.4" src="./../../assets/pictures/Imprimes/Imprime14.png" alt=""></div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FithPartImprime'
}

</script>

<style type="text/scss" lang="scss" scoped>

    .FithPartImprime {
        display: flex;
        flex-direction: column;

        .firstPart {
            height: 100vh;
            display: flex;
            flex-direction: row;

            .imprimeDouble {
                width: 40vw;
                position: relative;

                .Imprime11 {
                    transform: translateY(50vh);
                    max-height: 50vh;
                }

                img {
                    display: block;
                    position: absolute;
                    right: 0;
                    max-height: 50vh;
                }
            }

            .imprimeGrand {
                width: 60vw;

                img {
                    margin-top: 75px;
                    margin-left: 150px;
                    max-height: 75vh;
                }

                .rectangleGrey {
                    height: 100vh;
                    width: 30vw;
                    background-color: #C4C4C4;
                    opacity: 0.58;
                    position: absolute;
                    z-index: -1;
                }
            }
        }

        .secondPart {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .firstRectangle {
                background-color: #E2C491;
                height: 90vh;
                width: 32vw;
                overflow: hidden;

                img {
                    margin-top: -50px;
                    opacity: 0.6;
                    width: 40vw;
                }
            }

            .secondRectangle {
                background-color: #E2C491;
                height: 90vh;
                width: 32vw;
                overflow: hidden;

                img {
                    margin-top: -50px;
                    opacity: 0.6;
                    width: 40vw;
                }
            }

            .thirdRectangle {
                background-color: #E2C491;
                height: 90vh;
                width: 32vw;
                overflow: hidden;

                img {
                    opacity: 0.6;
                    width: 40vw;
                }
            }
        }
    }

</style>