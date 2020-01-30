<template>
    <div v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class="second-part">
        <div class="second-part-first">
             <img>
        </div>
        <div class="second-part-second">
            <img src="./../../assets/pictures/Recherches/Mannequin4.png" >
        </div>
    </div>
</template>

<script>
export default {
    name: 'SecondPartRecherches'
}
</script>

<style type="text/scss" lang="scss" scoped>

.second-part {
    display: flex;
    flex-direction: raw;
    height: 100vh;

    .second-part-first {
        background-image: url("./../../assets/pictures/Recherches/Mannequin5.png");
        background-size: cover;
        background-repeat: no-repeat;
        width: 50vw;
    }

    .second-part-second {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E2C491;
        width: 50vw;

        img {
            height: 55vh;
        }
    }
}

</style>