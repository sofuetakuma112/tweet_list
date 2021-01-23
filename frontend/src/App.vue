<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import firebase from './firebase';

export default {
  name: "App",
  created() {
    firebase.onAuth();
  },
};
</script>
