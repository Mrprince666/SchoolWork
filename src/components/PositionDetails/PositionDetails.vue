<template>
  <div class="PositionDetails">
    <div class="PositionDetails_main">
      <PDHeader />
      <PDContent />
      <PDFooter />
    </div>
    <div class="PositionDetails_right">
      <PDCompany />
      <PDComment />
    </div>
  </div>
</template>

<script>
import "./PositionDetails.scss";
import PDHeader from "./PDHeader/PDHeader.vue";
import PDContent from "./PDContent/PDContent.vue";
import PDFooter from "./PDFooter/PDFooter.vue";
import PDCompany from "./PDCompany/PDCompany.vue";
import PDComment from "./PDComment/PDComment.vue";

export default {
  components: {
    PDHeader,
    PDContent,
    PDFooter,
    PDCompany,
    PDComment,
  },

  setup() {
    return {};
  },
};
</script>
