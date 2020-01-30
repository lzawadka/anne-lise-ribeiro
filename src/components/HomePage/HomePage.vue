<template>
    <div>
        <!--<LandingPage>
        </LandingPage>-->
        <MenuPage />
    </div>
</template>

<script>
import LandingPage from './LandingPage.vue' 
import MenuPage from './MenuPage/MenuPage.vue'

import HeaderContainer from '../Header';
import FooterContainer from '../Footer';

export default {
    name: 'HomePage',
    components: {
        LandingPage,
        MenuPage,
        FooterContainer,
        HeaderContainer
  }
}
</script>