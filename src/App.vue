<template>
  <v-app>
    <v-app-bar app fixed height="80px">
      <SearchForm />
    </v-app-bar>
    <v-main>
      <LandingPage />
      <ListDisplay />
    </v-main>
  </v-app>
</template>

<script>
import ListDisplay from "./components/ListDisplay";
import SearchForm from "./components/SearchForm";
import LandingPage from "./components/LandingPage";

export default {
  name: "App",

  components: {
    ListDisplay,
    SearchForm,
    LandingPage
  },

  data: () => ({}),
};
</script>
