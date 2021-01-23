<template>
  <v-container class="pa-0" fluid>
    <div class="light-blue  lighten-2" align="center">
      <v-row justify="center">
        <h1 class="font-weight-black text-center pt-10 brown--text text--darken-4" style="font-size: 40px">
          Welcome to this application!
        </h1>
      </v-row>
      <v-btn class="ma-3" elevation="2" @click="doLogin">Login</v-btn>
      <!-- <v-btn class="ma-3" elevation="2" @click="doLogout">Logout</v-btn> -->
      <v-img
        :src="require('@/assets/image/LpImage.png')"
        :aspect-ratio="16 / 9"
        width="500"
        class="pa-8"
      >
      </v-img>
    </div>
    <div class="pa-6" style="background-color: #4e454a">
      <p
        class="brown--text text--lighten-5 text-center mb-0"
        style="font-size: 20px"
      >
        This app has these functions
      </p>
    </div>
    <div style="background-color: #f8f5e9">
      <v-row>
        <v-col>
        </v-col>
      </v-row>
      <v-avatar>
      </v-avatar>
    </div>
  </v-container>
</template>

<script>
import firebase from '../firebase';

export default {
  methods: {
    doLogin() {
      firebase.login();
    },
    // doLogout() {
    //   firebase.logout();
    // },
  },
}
</script>
