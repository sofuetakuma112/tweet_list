<template>
  <v-app>
    <v-app-bar app fixed height="80px">
      <SearchForm v-if="show" />
      <ListHeader v-else @change-header="ChangeSearchForm" />
    </v-app-bar>
    <v-main>
      <component
        :is="currentView"
        @change-component="ChangeDisplay"
      ></component>
      <LandingPage />
    </v-main>
  </v-app>
</template>

<script>
import ListDisplay from "./components/ListDisplay";
import SearchForm from "./components/SearchForm";
import ListDetails from "./components/ListDetails";
import ListHeader from "./components/ListHeader";
import LandingPage from "./components/LandingPage";

export default {
  name: "App",

  components: {
    ListDisplay,
    SearchForm,
    ListDetails,
    ListHeader,
    LandingPage
  },

  data: () => ({
    currentView: "ListDisplay",
    show: true
  }),
  methods: {
    ChangeDisplay(value) {
      this.currentView = value;
      this.show = false;
    },
    ChangeSearchForm(value) {
      this.currentView = "ListDisplay";
      this.show = value;
    }
  }
};
</script>
