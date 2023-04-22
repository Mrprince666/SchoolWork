<template>
  <div class="CompanyPageComment">
    <ul class="CompanyPageComment_item">
      <li v-for="item in comment" :key="item.id">
        <CommitItem :comment="item" />
      </li>
    </ul>
    <div class="CompanyPageComment_nothing" v-if="comment?.length === 0">
      暂无评论！
    </div>
  </div>
</template>

<script>
import "./CompanyPageComment.scss";
import CommitItem from "../../../common/CommitItem/CommitItem.vue";

export default {
  props: ["comment"],

  components: {
    CommitItem,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
