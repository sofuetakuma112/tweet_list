<template>
  <div>
    <v-card outlined height="400px">
      <div class="float-left pt-3">
        <v-icon large @click="$emit('change-savenew', false)">
          mdi-chevron-left
        </v-icon>
      </div>
      <v-card-title class="justify-center">新規コレクション </v-card-title>
      <v-divider></v-divider>

      <p class="pt-15 text-center">新規作成ファイル表示</p>
      <div class="text-center">
        <v-btn>作成</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>
