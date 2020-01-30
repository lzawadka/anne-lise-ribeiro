import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/HomePage/HomePage'
import Collection from '../components/Collection/Collection'
import Recherches from '../components/Recherches/Recherches'
import Inspiration from '../components/Inspiration/Inspiration'
import Imprimes from '../components/Imprimes/Imprimes'
import Textile from '../components/Textile/Textile'
import Toile from '../components/Toile/Toile'
import Shooting from '../components/Shooting/Shooting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/' || '/Accueil',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Recherches',
      name: 'Recherches',
      component: Recherches
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/Inspiration',
      name: 'Inspiration',
      component: Inspiration
    },
    {
      path: '/Imprimes',
      name: 'Imprimes',
      component: Imprimes
    },
    {
      path: '/Textile',
      name: 'Textile',
      component: Textile
    },
    {
      path: '/Shooting',
      name: 'Shooting',
      component: Shooting
    },
    {
      path: '/Toile',
      name: 'Toile',
      component: Toile
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
