<template>
  <div class="CommitItem">
    <div class="CommitItem_header">
      <AuthorHeader
        :userName="commentList.userName"
        :pic="commentList.pic"
        :time="commentList.time"
        :position="commentList.name"
      />
    </div>
    <div class="CommitItem_content">
      <CommitContent
        :title="commentList.title"
        :content="commentList.content"
        :like="commentList.like"
        :commentId="commentList.id"
        :pName="commentList.pName"
        :shortName="commentList.shortName"
        :image="commentList.image"
      />
    </div>
  </div>
</template>

<script>
import "./CommitItem.scss";
import AuthorHeader from "../AuthorHeader/AuthorHeader.vue";
import CommitContent from "../CommitContent/CommitContent.vue";
import { reactive, toRefs, watch } from "vue";

export default {
  components: {
    AuthorHeader,
    CommitContent,
  },

  props: ["comment"],

  setup(props) {
    const state = reactive({
      commentList: {},
    });

    watch(
      () => props.comment,
      (val) => {
        state.commentList = val;
      },
      { immediate: true }
    );

    return {
      ...toRefs(state),
    };
  },
};
</script>
