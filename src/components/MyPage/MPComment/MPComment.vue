<template>
  <div class="MPComment">
    <ul class="MPComment_list">
      <li class="MPComment_list_item" v-for="item in 3" :key="item">
        <MPCommentItem />
      </li>
    </ul>
  </div>
</template>

<script>
import "./MPComment.scss";
import MPCommentItem from "./MPCommentItem/MPCommentItem.vue";

export default {
  components: {
    MPCommentItem,
  },

  setup() {
    return {};
  },
};
</script>
