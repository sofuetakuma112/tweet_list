<template>
  <v-container>
    <v-text-field
      class="pt-8"
      v-model="message"
      label="TwitterURLを入力"
      type="text"
      filled
      rounded
      append-outer-icon="mdi-magnify"
      @click:append-outer="searchTweet()"
      @keyup.enter="searchTweet()"
    ></v-text-field>

    <v-dialog v-model="search" width="80%">
      <v-card v-if="messagecheck" class="text-center title py-5"
        >該当なし</v-card
      >

      <template v-for="tweet in tweets">
        <TwitterCard :tweet="tweet" :key="tweet.id" @save-list="openSaveList" />
      </template>
    </v-dialog>
    <SaveList v-model="savelist" :tweetAddList="tweetAddList" />
  </v-container>
</template>

<script>
import SaveList from "./SaveList";
import TwitterCard from "./TwitterCard";
import Methods from "../api/methods";

export default {
  components: {
    SaveList,
    TwitterCard
  },
  data: () => ({
    message: "",
    messagecheck: false,
    search: false,
    savelist: false,
    tweets: [],
    tweetAddList: {}
  }),
  methods: {
    openSaveList(tweet) {
      this.search = false;
      this.savelist = true;
      this.tweetAddList = tweet;
    },
    searchTweet() {
      if (this.message.length > 0) {
        this.search = true;
        this.message = this.message.substr(
          this.message.lastIndexOf("/") + 1,
          19
        );
        if (this.message.length == 19 && !isNaN(this.message)) {
          this.messagecheck = false;
        } else {
          this.messagecheck = true;
        }
        this.post().then(tweetData => {
          this.tweets = tweetData.data.tweets;
        });
      }
    },

    async post() {
      let response = await Methods.fetchTweet(this.message);
      return response;
    }
  }
};
</script>
