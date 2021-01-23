<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4" md="3" v-for="(list, index) in filteredTweetLists" :key="index">
        <v-hover v-slot="{ hover }">
          <v-card
            class="tweet-list mx-md-10 my-md-2 rounded-lg"
            height="256"
            :color="randomColor()"
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
              <v-btn @click="showListDetails(list)" text class="font-weight-bold"
                >See more list</v-btn
              >
            </v-overlay>
            </v-card>
          </v-hover>
          <p class="text-center font-weight-medium my-md-4">
            {{ list.listName }}
          </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from '../firebase'

export default {
  data: () => ({
    backgroundColors: [
      "#a0d8ef",
      "#1da1f1",
      "#6c9bd2",
      "#68a4d9",
      "#00a1e9",
      "#0075c2",
      "#00afcc"
    ],
    filteredTweetLists: [],
    isShowListDetails: false,
    dialog: false,
  }),
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  created() {
    const that = this
    firebase.db()
      .collection("tweet_lists")
      .get()
      .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if (doc.data().uid === that.user.uid) {
          that.filteredTweetLists.push(doc.data())
        }
    });
});
  },
  methods: {
    showListDetails(list) {
      // this.isShowListDetails = true
      this.$emit("change-component", {
        view: "ListDetails",
        tweetList: list
      });
    },
    randomColor() {
      const rnd = Math.floor(Math.random() * this.backgroundColors.length);
      return this.backgroundColors[rnd];
    },
    changeDialogState(bool) {
      this.dialog = bool;
    },
  }
};
</script>
