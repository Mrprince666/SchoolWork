<template>
  <div class="MainCommit">
    <div class="MainCommit_title">精选评论</div>
    <ul class="MainCommit_commit">
      <li class="MainCommit_commit_item" v-for="item in 3" :key="item">
        <CommitItem />
      </li>
    </ul>
  </div>
</template>

<script>
import "./MainComment.scss";
import CommitItem from "../../../../common/CommitItem/CommitItem.vue";

export default {
  components: {
    CommitItem,
  },

  setup() {
    return {};
  },
};
</script>
