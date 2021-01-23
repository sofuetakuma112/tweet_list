<template>
  <v-container>
    <v-row>
      <v-col
        :cols="cols"
        v-for="count in tweet.extended_entities.media.length"
        :key="count"
      >
        <v-img
          width="100%"
          height="100%"
          :src="tweet.extended_entities.media[count - 1].media_url_https"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cols: "6"
  }),
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  created() {
    if (this.tweet.extended_entities.media.length == 1) {
      this.cols = "12";
    }
  }
};
</script>
