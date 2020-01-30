<template>
    <div>
            <first-part-imprime />
            <second-part-imprime />
            <third-part-imprime />
            <forth-part-imprime />
            <fith-part-imprime />
            <sixth-part-imprime />
            <seventh-part-imprime />
            <eight-part-imprime />
    </div>    
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';

import FirstPartImprime from './FirstPartImprime';
import SecondPartImprime from './SecondPartImprime';
import ThirdPartImprime from './ThirdPartImprime';
import ForthPartImprime from './ForthPartImprime';
import FithPartImprime from './FithPartImprime';
import SixthPartImprime from './SixthPartImprime';
import SeventhPartImprime from './SeventhPartImprime';
import EightPartImprime from './EightPartImprime';

export default {
    name: 'Imprimes',
    components: {
        FirstPartImprime,
        SecondPartImprime,
        ThirdPartImprime,
        ForthPartImprime,
        FithPartImprime,
        SixthPartImprime,
        SeventhPartImprime,
        EightPartImprime
    }
}
</script>