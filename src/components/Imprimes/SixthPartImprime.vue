<template>
    <div class="SixthPartImprime">

        <div class="firstPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.1 }">
           <img src="./../../assets/pictures/Imprimes/SixthFirst.png" alt="">
        </div>

        <div class ="secondPart" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
            <div class="firstDiv">
                <div class="rectangleGrey"></div>
                <img v-parallax="0.15" src="./../../assets/pictures/Imprimes/Imprime18.png" alt="">
            </div>

            <div class="secondDiv">
                <img src="./../../assets/pictures/Imprimes/Imprime17.png" alt="">
            </div>
            

        </div>
        

    </div>
</template>

<script>

export default {
  name: 'SixthPartImprime'
}

</script>

<style type="text/scss" lang="scss" scoped>

.SixthPartImprime {
    display: flex;
    flex-direction: column;

    .firstPart {
        height: 100vh;
        width: 100vw;
        
        img {
            width: 100%;
            height: 100vh;
            position: relative;
            left: 0;
        }
    }

    .secondPart {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;

        .firstDiv {
            width: 50vw;
            height: 100vh;

            img {
                margin-top: 100px;
                margin-left: 230px;
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

        .secondDiv {
            width: 50vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}

</style>


