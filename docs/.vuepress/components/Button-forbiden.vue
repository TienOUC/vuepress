<template>
  <div id="app">
    <!-- 禁用按钮 -->
    <div class="row">
      <ti-button @click="getInfo" type="warning" disabled>禁止点击</ti-button>
    </div>
  </div>
</template>

<script>
import TiButton from "../../../src/button";
export default {
  name: "Button-forbidden",
  components: {
    TiButton,
  },
  methods: {
    getInfo() {
      alert("点击事件已触发");
    }
  }
};
</script>

<style lang="scss">
.row {
  margin-bottom: 20px;
  .ti-button {
    margin-right: 10px;
    margin-bottom: 5px;
  }
}
</style>
