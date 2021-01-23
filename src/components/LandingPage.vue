<template>
  <v-container class="pa-0" fluid>
    <div style="background-color: #f8f5e9" align="center">
        <v-row justify="center">
          <h1
            class="font-weight-black text-center pt-10"
            style="font-size: 40px"
          >
            Welcome to this application!
          </h1>
        </v-row>
          <v-btn class="ma-3" elevation="2">Login</v-btn>
      <v-img
        :src="require('@/assets/image/LpImage.png')"
        :aspect-ratio="16 / 9"
        width="600"
      >
      </v-img>
    </div>
    <div style="background-color: #4e454a">
      <p>This app has these functions.</p>
    </div>
  </v-container>
</template>

