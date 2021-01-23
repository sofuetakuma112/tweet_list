import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_Firebase_API_KEY,
  authDomain: process.env.VUE_APP_Firebase_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_Firebase_PROJECT_ID,
  storageBucket: process.env.VUE_APP_Firebase_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_Firebase_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_Firebase_APP_ID,
  measurementId: process.env.VUE_APP_Firebase_MEASUREMENT_ID,
};

console.log(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
