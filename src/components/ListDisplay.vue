<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" md="3" v-for="(list, index) in tweetList" :key="index" class="pa-0">
        <v-hover v-slot="{ hover }">
          <v-card
            class="tweet-list mx-md-10 my-md-2 rounded-lg"
            height="256"
            color="#1da1f1"
            outlined
            :elevation="hover ? 12 : 4"
            style="cursor: pointer"
          >
            <v-img
              v-if="list.img != ' '"
              :src="list.img"
              height="254px"
              class="rounded-lg"
            ></v-img>
            <v-overlay v-if="hover" absolute color="#1f1f1f">
              <v-btn @click="showListDetails" text class="font-weight-bold">See more list</v-btn>
            </v-overlay>
          </v-card>
        </v-hover>
        <p class="text-center font-weight-medium my-md-4">
          {{ list.listTitle }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tweetList: [
      { listTitle: "リスト1", img: "km353344929401120215315.jpg" },
      { listTitle: "リスト2", img: "" },
      { listTitle: "リスト3", img: "" },
      { listTitle: "リスト4", img: "" },
      { listTitle: "リスト5", img: "" },
      { listTitle: "リスト6", img: "" },
    ],
  }),
  methods: {
    showListDetails(){
      console.log("HelloWorld")
    }
  }
};
</script>
  