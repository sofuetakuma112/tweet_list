<template>
  <v-container-fuild>
    <v-card flat outlined height="100px" v-for="item in items" :key="item.list">
      <div class="text-center pt-5">
        <p>ツイートの内容</p>
        {{ item.list }}
      </div>
    </v-card>
  </v-container-fuild>
</template>

<script>
export default {
  data: () => ({
    items: [
      { list: "リスト1" },
      { list: "リスト2" },
      { list: "リスト3" },
      { list: "リスト4" },
      { list: "リスト5" },
      { list: "リスト6" },
      { list: "リスト7" },
      { list: "リスト8" },
      { list: "リスト9" },
      { list: "リスト10" }
    ]
  })
};
</script>
