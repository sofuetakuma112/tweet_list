import firebase from 'firebase';
import store from "./store";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_Firebase_API_KEY,
  authDomain: process.env.VUE_APP_Firebase_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_Firebase_PROJECT_ID,
  storageBucket: process.env.VUE_APP_Firebase_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_Firebase_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_Firebase_APP_ID,
  measurementId: process.env.VUE_APP_Firebase_MEASUREMENT_ID,
};

export default {
  init() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    const provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider);
  },
  logout() {
    firebase.auth().signOut()
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('onAuthStateChanged', user);
      store.commit('onUserStatusChanged', user.uid ? true : false);
    });
  }
};