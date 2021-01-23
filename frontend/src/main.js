import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import firebase from './firebase';

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

// Vue.config.productionTip = false

// console.log(firebaseConfig);

// Initialize Firebase
firebase.init();

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
