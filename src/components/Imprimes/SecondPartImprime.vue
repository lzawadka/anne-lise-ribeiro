<template>
<div class="part-two">
    <div class="first-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
        <div class="mushroom-part">
            <img src="../../assets/pictures/Imprimes/Champignon1.png" alt="">
            <img src="../../assets/pictures/Imprimes/Champignon2.png" alt="">
            <img src="../../assets/pictures/Imprimes/Champignon3.png" alt="">
        </div>
        <div class="rectangle-grey-2"></div>
        <div class="mushroom-imprime">
            <!--<img class="imprime1" src="./../../assets/pictures/Imprimes/Imprime3.png" alt="">-->
            <div class="imprime2"><img v-parallax="0.15"  src="./../../assets/pictures/Imprimes/Imprime4.png" alt=""></div>
        </div>
    </div>
    <div class="second-part" v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }">
        <img class="imprime5" src="./../../assets/pictures/Imprimes/Imprime5.png" alt="">
        <div class="rectangle-grey-3"></div>
        <div v-parallax="0.1" class="imprime6" ><img src="./../../assets/pictures/Imprimes/Imprime6.png" alt=""></div>
    </div>
</div>

</template>

<script>

export default {
  name: 'SecondPartImprime'
}

</script>

<style type="text/scss" lang="scss" scoped>


.part-two {
    display: flex;
    flex-direction: column;

    .first-part {
        display: flex;
        flex-direction: row;

        .mushroom-part {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30vw;
            justify-content: space-around;

            img {
                width: 17vw;
            }
        }

        .rectangle-grey-2 {
            display: block;
            height: 100vh;
            width: 30vw;
            background-color: #C4C4C4;
            opacity: 0.58;
        }

        .mushroom-imprime {
        position: relative;
        right: 0%;
        z-index: 1;
        height: 100vh;
        width: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;

            .imprime1 {
                transform: translate(-40px, 50px);
                position: relative;
                z-index: 1;
                width: 35vw;
            }
            .imprime2 {
                z-index: -1;
                
                img {
                    width: 30vw;
                    transform: translate(3vw, 5vw);
                    z-index: -1;
                    position: relative;
                }

                &::before {
                    content: "";
                    display: block;
                    background-image: url("./../../assets/pictures/Imprimes/Imprime3.png");
                    transform: translate(-13vw, -5vw);
                    width: 30vw;
                    height: 25vw;
                    position: absolute;
                }
            }
        }
    }

    .second-part {
        display: flex;
        flex-direction: row;

        .rectangle-grey-3 {
            height: 100vh;
            width: 35vw;
            background-color: #C4C4C4;
            opacity: 0.58;
            position: relative;
            z-index: -1;
        }

        .imprime6 {
            height: 100vh;
            width: 25vw;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;   
            right: 5vw;
        }

        .imprime5 {
            height: 90vh;
            position: relative;
            left: 90px;
            transform: translateY(45px);  
        }
    }
    

    
}

</style>