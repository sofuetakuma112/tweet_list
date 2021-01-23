<template>
  <div>
    <v-app-bar app fixed height="80px">
      <SearchForm v-if="show" />
      <ListHeader v-else @change-header="ChangeSearchForm" />
    </v-app-bar>
    <v-main>
      <component
        :is="currentView"
        @change-component="ChangeDisplay"
        v-if="currentView !== 'ListDetails'"
      ></component>
      <ListDetails v-if="currentView === 'ListDetails'" :tweetList="tweetList" />
    </v-main>
  </div>
</template>

<script>
import ListDisplay from "./ListDisplay";
import SearchForm from "./SearchForm";
import ListDetails from "./ListDetails";
import ListHeader from "./ListHeader";

export default {
  components: {
    ListDisplay,
    SearchForm,
    ListDetails,
    ListHeader
  },
  data: () => ({
    currentView: "ListDisplay",
    show: true,
    tweetList: null
  }),
  methods: {
    ChangeDisplay(object) {
      this.currentView = object.view;
      this.tweetList = object.tweetList;
      this.show = false;
    },
    ChangeSearchForm(value) {
      this.currentView = "ListDisplay";
      this.show = value;
    }
  }
};
</script>
