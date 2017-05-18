// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

//configuration de maniere globale 
// d'un composonte GMAPS
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD8PMrA3-OB29YFcbl8eMDvyjQ5KnN2Ws4',
    // libraries: 'places', //// If you need to use place input 
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
