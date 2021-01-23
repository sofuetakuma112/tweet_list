<template>
  <v-dialog
    width="100%"
    :value="savelist"
    @click:outside="$emit('change-savelist', false)"
    content-class="list-item"
    persistent
  >
    <v-card v-if="savenew">
      <CreateList @change-savenew="savenew = $event" />
    </v-card>
    <v-card outlined v-else>
      <div class="float-right pt-3">
        <v-icon large @click="savenew = true"> mdi-plus </v-icon>
      </div>
      <div class="float-left pt-3">
        <v-icon large @click="$emit('change-savelist', false)">
          mdi-chevron-left
        </v-icon>
      </div>
      <v-card-title class="justify-center">保存先 </v-card-title>

      <v-divider></v-divider>

      <v-container>
        <v-row no-gutters class="flex-row flex-nowrap overflow-auto">
          <v-col cols="4" v-for="list in filteredTweetLists" :key="list.id">
            <v-card height="100px" @click="addTweetToList(list)">{{ list.listName }}</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import CreateList from "./CreateList";
import firebase from "../firebase"

export default {
  model: {
    prop: "savelist",
    event: "change-savelist"
  },

  props: {
    savelist: {
      type: Boolean,
      default: false
    },
    tweetAddList: {
      type: Object,
    },
  },
  data: () => ({
    savenew: false,
    filteredTweetLists: []
  }),
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  created() {
    firebase.db().collection("tweet_lists").onSnapshot((querySnapshot) => {
        this.filteredTweetLists = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().uid === this.user.uid) {
            this.filteredTweetLists.push({
              ...doc.data(),
              id: doc.id
            });
          }
        });
      });
  },
  methods: {
    // リストにツイートのIDを格納
    addTweetToList(list) {
      firebase.db()
        .collection('tweet_lists')
        .doc(list.id)
        .update({ // リストに追加するツイートのIDを配列に追加
          tweetIds: firebase.arrayUnion(this.tweetAddList.id)
        });
      this.saveTweet()
    },
    // ツイートの保存
    saveTweet() {
      firebase.db().collection('tweets')
        .doc(String(this.tweetAddList.id))
        .set({
          tweet: this.tweetAddList,
          tweetId: this.tweetAddList.id
        });
    },
  },
  components: {
    CreateList
  }
};
</script>

<style lang="scss">
.list-item {
  bottom: 0 !important;
  position: absolute !important;
  margin-bottom: 0 !important;
}
</style>
