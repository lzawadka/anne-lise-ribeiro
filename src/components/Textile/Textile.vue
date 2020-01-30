<template>
    <div>
            <first-part-textile />
            <second-part-textile />
    </div>    
</template>

<script>
import Header from '../Header';
import Footer from '../Footer';

import FirstPartTextile from './FirstPartTextile';
import SecondPartTextile from './SecondPartTextile';

export default {
    name: 'Textile',
    components: {
       FirstPartTextile,
        SecondPartTextile,
    }
}
</script>