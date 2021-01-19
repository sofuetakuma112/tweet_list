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
      @click:append-outer="sendMessage"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    message: ""
  }),
  methods: {
    sendMessage() {
      alert("1");
    }
  }
};
</script>
