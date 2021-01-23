<template>
  <v-container class="d-flex">
    <v-icon large @click="ReturnBtn">
      mdi-chevron-left
    </v-icon>
    <div class="text-center mx-auto">
      <p class="justify-center pt-4 pr-9">すべての投稿</p>
    </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    ReturnBtn() {
      this.$emit("change-header", true);
    }
  }
};
</script>
