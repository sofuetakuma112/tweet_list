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
          <v-icon large @click="saveList"> mdi-plus </v-icon></v-card-title
        >
      </v-card>
    </v-dialog>
    <v-dialog
      width="100%"
      v-model="savelist"
      content-class="list-item"
      persistent
    >
      <v-card v-if="savenew"
        ><v-icon large @click="savenew = false">
          mdi-chevron-left
        </v-icon>
        <v-btn>保存</v-btn>
      </v-card>
      <v-card outlined v-else>
        <div class="float-right pt-3">
          <v-icon large @click="savenew = true"> mdi-plus </v-icon>
        </div>
        <div class="float-left pt-3">
          <v-icon large @click="savelist = false"> mdi-chevron-left </v-icon>
        </div>
        <v-card-title class="justify-center">保存先 </v-card-title>

        <v-divider></v-divider>

        <v-container class="  overflow-x-auto">
          <v-card
            v-for="content in contents"
            :key="content"
            height="50px"
            width="1500px"
            flat
            tile
            >{{ content }}</v-card
          >
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    message: "",

    contents: [
      "リスト1",
      "リスト2",
      "リスト3",
      "リスト4",
      "リスト5",
      "リスト6"
    ],
    search: false,
    savelist: false,
    savenew: false,
    dialog: false
  }),
  methods: {
    sendMessage() {
      this.dialog = true;
      alert("1");
    },
    saveList() {
      this.search = false;
      this.savelist = true;
    }
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
