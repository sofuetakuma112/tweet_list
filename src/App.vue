<template>
  <v-app>
    <v-main>
      <ListDisplay :listId="tweetList.id" />
    </v-main>
  </v-app>
</template>

<script>
import ListDisplay from "./components/ListDisplay";

export default {
  name: "App",

  components: {
    ListDisplay,
  },

  data: () => ({}),
};
</script>
