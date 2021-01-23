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
    ></v-text-field>
    <v-dialog v-model="search" width="60%">
      <v-card>
        <v-card-title>
          <template v-for="tweet in tweets">
            <TwitterCard :tweet="tweet" :key="tweet.id" />
            <v-icon
              large
              @click.stop="openSaveList(tweet)"
              :key="`icon_${tweet.id}`"
            >
              mdi-plus
            </v-icon>
          </template>
        </v-card-title>
      </v-card>
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
