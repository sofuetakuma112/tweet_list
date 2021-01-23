<template>
  <v-container fuild>
    <template v-if="tweetList.tweetIds.length > 0">
      <v-card flat outlined height="100px" v-for="tweet in tweets" :key="tweet.id">
        <TwitterCard :tweet="tweet" />
      </v-card>
    </template>
    <template v-else>
      <div>
        リストに追加されたツイートはありません
      </div>
    </template>
  </v-container>
</template>

<script>
import TwitterCard from './TwitterCard';
import firebase from '../firebase'

export default {
  components: {
    TwitterCard,
  },
  data() {
    return {
      tweets: []
    }
  },
  props: {
    tweetList: {
      type: Object,
    }
  },
  created() {
    this.tweetList.tweetIds.forEach(id => {
      firebase.db()
          .collection('tweets')
          .doc(String(id))
          .get()
          .then(doc => {
            this.tweets.push(doc.data().tweet)
          })
    });
  },
};
</script>
