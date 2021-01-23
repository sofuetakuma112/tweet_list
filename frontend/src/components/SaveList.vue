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
          <v-col cols="4" v-for="content in contents" :key="content">
            <v-card height="100px">{{ content }}</v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import CreateList from "./CreateList";
export default {
  model: {
    prop: "savelist",
    event: "change-savelist"
  },

  props: {
    savelist: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    contents: [
      "リスト1",
      "リスト2",
      "リスト3",
      "リスト4",
      "リスト5",
      "リスト6"
    ],
    savenew: false
  }),
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
