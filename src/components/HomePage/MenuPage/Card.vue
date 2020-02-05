<template>
    
    <div class="cards">
        <div class="card-container">
            <router-link class="card-link" to="/Shooting" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='main-card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/Shooting.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }"><p>Shooting</p></Cards></router-link>
        </div>
        <div class="card-container">
            <router-link class="card-link" to="/Collection" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/Collection.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }"><p>Collection</p></Cards></router-link>
            <router-link class="card-link" to="/Imprimes" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/Imprimés.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }"><p>Imprimé</p></Cards></router-link>
        </div>
        <div class="card-container">
            <router-link class="card-link" to="/Inspiration" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/background.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }"><p>Inspiration</p></Cards></router-link>
            <router-link class="card-link" to="/Recherches" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/Recherches.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }" href="/Recherches"><p class="title-card-link">Recherche</p></Cards></router-link>
        </div>
        <div class="card-container">
            <router-link class="card-link" to="/Toile" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/ToileRobeChemise.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }"><p>Toile</p></Cards></router-link>
            <router-link class="card-link" to="/Textile" exact><cards  v-scroll-reveal.reset="{ delay : 0, viewFactor: 0.2 }" class='card' name='card' v-bind:style="{ 'background-image': 'url('  + require('../../../assets/pictures/Textile.png') + ')', 'background-repeat' : 'no-repeat', 'background-size' : 'cover' }"><p>Textile</p></Cards></router-link>        
        </div>
    </div>
</template>

<script>
import Cards from './Cards'

export default {
    name: 'Card',
}
</script>

<style type="text/scss" lang="scss" scoped>
.cards {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 70px;

    .card-container {
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100vw;
        font-size: 70px;

        .main-card {
            pointer-events: auto;
            margin: 0.5vw;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60vw;
            height: 87vh;
            transition: 0.4s;
            text-decoration: none !important;
            color: black;
            background-position: center;

            &:hover {
                transform: scale(1.05);
            }
        }

        .card {
            pointer-events: auto;
            margin: 2.5vw;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30vw;
            height: 30vw;
            transition: 0.4s;
            text-decoration: none !important;
            color: black;

            &:hover {
                transform: scale(1.05);
            } 
        }
    }
}

@media (max-width: 1168px) {
    p {
        font-size: 40px;
    }
}
</style>