/**
 * © 2018 Justin Schlump
 * This code is licensed under MIT license (see LICENSE.txt for details)
 * 
 */

import '../sass/main.scss';
import Vue from 'vue';
import App from '../vue/App.vue';
import router from '../vue/router';

new Vue({
  el: "#app",
  router,
  template: '<App/>',
  components: { App }
})