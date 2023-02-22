<template>
  <div class="CommitItem">
    <div class="CommitItem_header">
      <AuthorHeader />
    </div>
    <div class="CommitItem_content">
      <CommitContent />
    </div>
  </div>
</template>

<script>
import "./CommitItem.scss";
import AuthorHeader from "../AuthorHeader/AuthorHeader.vue";
import CommitContent from "../CommitContent/CommitContent.vue";

export default {
  components: {
    AuthorHeader,
    CommitContent,
  },

  setup() {
    return {};
  },
};
</script>
