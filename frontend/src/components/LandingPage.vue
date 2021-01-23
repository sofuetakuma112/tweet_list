<template>
  <v-container class="pa-0" fluid>
    <div class="light-blue lighten-2" align="center">
      <v-row justify="center">
        <h1
          class="font-weight-black text-center pt-10 brown--text text--darken-4"
          style="font-size: 40px"
        >
          Welcome to this application!
        </h1>
      </v-row>
      <v-btn class="ma-5" elevation="2">Login</v-btn>
      <v-img
        :src="require('@/assets/image/LpTopImage1.png')"
        :aspect-ratio="16 / 9"
        width="500"
        class="pa-8"
      >
      </v-img>
      <v-img
        :src="require('@/assets/image/LpTopImage1.png')"
        :aspect-ratio="16 / 9"
        width="500"
        class="pa-8"
      >
      </v-img>
    </div>
    <div class="pa-4" style="background-color: #4e454a">
      <p
        class="brown--text text--lighten-5 text-center mb-0 pa-4"
        style="font-size: 20px"
      >
        With this application, you will be able to see only the tweets that you
        want to see！
      </p>
    </div>
    <div align="center" style="background-color: #f8f5e9">
      <h2
        class="font-weight-bold pa-7 brown--text text--darken-4"
        style="font-size: 35px"
      >
        works
      </h2>
      <v-row justify="center">
        <v-col
          cols="6"
          v-for="(work, index) in works"
          :key="index"
          class="d-flex flex-column"
        >
          <v-avatar size="250" class="white mx-auto">
            <v-img :src="work.img" :aspect-ratio="1 / 1"></v-img>
          </v-avatar>
          <p style="font-size: 20px">
            {{ work.detail }}
          </p>
        </v-col>
      </v-row>
      <v-avatar> </v-avatar>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    works: [
      {
        img: require("@/assets/image/LpWorkIcon1.png"),
        detail: "お気に入りのツイートをまとめたリストを作ることができます",
      },
      {
        img: require("@/assets/image/LpWorkIcon2.png"),
        detail: "自分で作ったお気に入りのツイートリストを公開できます",
      },
    ],
  }),
};
</script>

