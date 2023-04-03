<template>
  <div class="CommitItem">
    <div class="CommitItem_header">
      <AuthorHeader
        :userName="comment.userName"
        :pic="comment.pic"
        :time="comment.time"
        :position="comment.name"
      />
    </div>
    <div class="CommitItem_content">
      <CommitContent
        :title="comment.title"
        :content="comment.content"
        :like="comment.like"
        :commentId="comment.id"
      />
    </div>
  </div>
</template>

<script>
import "./CommitItem.scss";
import AuthorHeader from "../AuthorHeader/AuthorHeader.vue";
import CommitContent from "../CommitContent/CommitContent.vue";
import { onMounted, reactive, toRefs } from "vue";

export default {
  components: {
    AuthorHeader,
    CommitContent,
  },

  props: ["comment"],

  setup(props) {
    const state = reactive({
      comment: {},
    });

    onMounted(() => {
      state.comment = props.comment;
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
