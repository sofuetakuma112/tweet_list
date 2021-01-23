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
      @click:append-outer="search = true"
    ></v-text-field>
    <v-dialog v-model="search" width="60%">
      <v-card>
        <v-card-title
          >ツイート内容

          <v-icon large @click.stop="openSaveList()">
            mdi-plus
          </v-icon></v-card-title
        >
      </v-card>
    </v-dialog>
    <SaveList v-model="savelist" />
  </v-container>
</template>

<script>
import SaveList from "./SaveList";

export default {
  data: () => ({
    message: "",
    search: false,
    savelist: false
  }),
  methods: {
    openSaveList() {
      this.search = false;
      this.savelist = true;
    }
  },
  components: {
    SaveList
  }
};
</script>
