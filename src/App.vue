<template>
  <v-app>
    <v-main>
      <ListDisplay />
    </v-main>
  </v-app>
</template>

<script>
import ListDisplay from "./components/ListDisplay";

export default {
  name: "App",

  components: {
    ListDisplay
  },

  data: () => ({})
};
</script>
