<template>
    <div>
        <first-part-inspi />
        <second-part-inspi />
        <third-part-inspi />
        <forth-part-inspi />
        <fith-part-inspi />
    </div>    
</template>

<script>
import FirstPartInspi from './FirstPartInspi'
import SecondPartInspi from './SecondPartInspi'
import ThirdPartInspi from './ThirdPartInspi'
import ForthPartInspi from './ForthPartInspi'
import FithPartInspi from './FithPartInspi'

export default {
    name: 'Inspiration',
    components: {
        FirstPartInspi,
        SecondPartInspi,
        ThirdPartInspi,
        ForthPartInspi,
        FithPartInspi
    }
}
</script>