<template>
  <div class="PositionDetails">
    <div class="PositionDetails_main">
      <PDHeader />
    </div>
    <div class="PositionDetails_right"></div>
  </div>
</template>

<script>
import "./PositionDetails.scss";
import PDHeader from "./PDHeader/PDHeader.vue";

export default {
  components: {
    PDHeader,
  },

  setup() {
    return {};
  },
};
</script>
