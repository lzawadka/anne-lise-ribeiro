<template>
    <div>
        <first-part-recherches />
        <second-part-recherches />
        <third-part-recherches />
    </div>    
</template>

<script>
import FirstPartRecherches from './FirstPartRecherches'
import SecondPartRecherches from './SecondPartRecherches'
import ThirdPartRecherches from './ThirdPartRecherches'


export default {
    name: 'Recherches',
    components: {
        FirstPartRecherches,
        SecondPartRecherches,
        ThirdPartRecherches
    }
}
</script>