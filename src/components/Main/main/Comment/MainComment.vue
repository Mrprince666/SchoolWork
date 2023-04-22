<template>
  <div class="MainCommit">
    <div class="MainCommit_title">精选评论</div>
    <ul class="MainCommit_commit">
      <li
        class="MainCommit_commit_item"
        v-for="item in commentList"
        :key="item.id"
      >
        <CommitItem :comment="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import "./MainComment.scss";
import CommitItem from "../../../../common/CommitItem/CommitItem.vue";
import { selectComment } from "../../../../request/comment.js";
import { onMounted, reactive, toRefs } from "vue";

export default {
  components: {
    CommitItem,
  },

  setup() {
    const state = reactive({
      commentList: [],
    });

    onMounted(() => {
      getList();
    });

    const getList = async () => {
      const { data: res } = await selectComment();
      if (res.status === 0) {
        state.commentList = res.data;
      }
    };

    return {
      ...toRefs(state),
    };
  },
};
</script>
