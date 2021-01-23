import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import firebase from './firebase';

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
