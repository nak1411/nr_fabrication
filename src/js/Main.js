/**
 * © 2018 Justin Schlump
 * This code is licensed under MIT license (see LICENSE.txt for details)
 * 
 */

import '../sass/main.scss';
import Vue from 'vue';
import App from '../vue/App.vue';

new Vue({
  el: ".app",
  render: h => h(App)
})