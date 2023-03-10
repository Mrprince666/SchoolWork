<template>
  <div class="CompanyPageComment">
    <ul class="CompanyPageComment_item">
      <li v-for="item in 6" :key="item">
        <CommitItem />
      </li>
    </ul>
  </div>
</template>

<script>
import "./CompanyPageComment.scss";
import CommitItem from "../../../common/CommitItem/CommitItem.vue";

export default {
  components: {
    CommitItem,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
