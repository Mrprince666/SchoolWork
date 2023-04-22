<template>
  <div class="TDCommentItem">
    <div class="TDCommentItem_author">
      <img class="TDCommentItem_author_img" :src="reply.pic" alt="头像" />
      <div class="TDCommentItem_author_right">
        <span class="TDCommentItem_author_right_name">
          <span>{{ reply.userName }}</span>
          <span
            v-if="id === reply.userId"
            class="TDCommentItem_author_right_delete"
            @click="deleteReplyItem(reply.id)"
            >删除</span
          >
        </span>
        <span class="TDCommentItem_author_right_time">
          {{ standardTime(+reply.time) }}
        </span>
      </div>
    </div>
    <div class="TDCommentItem_content">{{ reply.content }}</div>
  </div>
</template>

<script>
import "./TDCommentItem.scss";
import { standardTime } from "../../../assets/js/standardTime";
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  props: ["reply", "deleteReplyItem"],

  setup() {
    const store = useStore();
    const state = reactive({
      id: store.state.user.userInfo.id,
    });

    return {
      ...toRefs(state),
      standardTime,
    };
  },
};
</script>
