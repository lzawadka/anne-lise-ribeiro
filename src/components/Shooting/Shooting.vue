<template>
    <div>
        <first-part-shooting />
        <second-part-shooting />
        <third-part-shooting />
        <forth-part-shooting />
        <fith-part-shooting />
    </div>    
</template>

<script>
import FirstPartShooting from './FirstPartShooting'
import SecondPartShooting from './SecondPartShooting'
import ThirdPartShooting from './ThirdPartShooting'
import ForthPartShooting from './ForthPartShooting'
import FithPartShooting from './FithPartShooting'

export default {
    name: 'Shooting',
    components: {
        FirstPartShooting,
        SecondPartShooting,
        ThirdPartShooting,
        ForthPartShooting,
        FithPartShooting
    }
}
</script>