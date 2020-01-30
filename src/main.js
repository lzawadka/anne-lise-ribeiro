// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueParallaxJs)
Vue.use( VueScrollReveal)
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
