<template>
    <div class="ForthPartImprime">
        
        <div class="firstPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
            <img src="./../../assets/pictures/Imprimes/ForthPart1.png" alt="">
        </div>
        <div class ="secondPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
            <div class="firstPartSecond">
                <div class="imprime10">
                    <img v-parallax="0.4" src="./../../assets/pictures/Imprimes/Imprime10.png" alt="">
                </div>
                <img class="Tenu4" src="./../../assets/pictures/Imprimes/Tenu4.png" alt="">
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

.ForthPartImprime {
    display: flex;
    flex-direction: column;
    width: 100vw;

    .firstPart {
        height: 100vh;

        img {
            height: 100vh;
            position: absolute;
            right: 0;
        }
    }

    .secondPart {
        height: 100vh;
        width: 100vw;

        .firstPartSecond {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;

            .Tenu4 {
                transform: translateX(-100px);
            }
        }

        .imprime10 {
            background-color: #E2C491;
            width: 40vw;
            height: 40vw;
            overflow: hidden;
            transform: translateY(50px);

            img {
                width: 45vw;
            }
        }
    }
}

</style>