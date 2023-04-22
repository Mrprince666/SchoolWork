<template>
  <div class="TrendsDetails">
    <div class="TrendsDetails_text">
      <CommitItem :comment="comment" />
    </div>
    <div class="TrendsDetails_write">
      <input
        type="text"
        placeholder="快来评论一下吧！"
        class="TrendsDetails_write_input"
        v-model="message"
      />
      <button class="TrendsDetails_write_btn" @click="addReplyMessage">
        评论
      </button>
    </div>
    <div class="TrendsDetails_footer">
      <div class="TrendsDetails_title">全部评论</div>
      <ul class="TrendsDetails_comment" v-if="replyTotal !== 0">
        <li
          class="TrendsDetails_comment_item"
          v-for="item in replyList"
          :key="item.id"
        >
          <TDCommentItem :reply="item" :deleteReplyItem="deleteReplyItem" />
        </li>
      </ul>
      <div v-else class="TrendsDetails_nothing">暂无评论！</div>
      <div class="TrendsDetails_pagination" v-if="replyTotal > pageSize">
        <el-pagination
          small
          background
          layout="prev, pager, next"
          :total="replyTotal"
          :page-size="pageSize"
          :current-page="page"
          class="mt-4"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "./TrendsDetails.scss";
import CommitItem from "../../common/CommitItem/CommitItem.vue";
import { useRoute, useRouter } from "vue-router";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import TDCommentItem from "./TDCommentItem/TDCommentItem.vue";
import {
  selectACommnet,
  selectReply,
  addReply,
  deleteReply,
} from "../../request/comment";

export default {
  components: {
    CommitItem,
    TDCommentItem,
  },

  setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      id: route.query.id,
      comment: {},
      page: 1,
      replyList: [],
      replyTotal: 0,
      pageSize: 5,
      message: "",
      userId: store.state.user.userInfo.id,
    });

    onMounted(() => {
      getComment();
      getReply();
    });

    const getComment = async () => {
      const params = {
        id: state.id,
      };
      const { data: res } = await selectACommnet(params);
      if (res.status === 0) {
        state.comment = res.data;
      }
    };

    // 获取回复
    const getReply = async () => {
      const params = {
        page: state.page,
        id: state.id,
        pageSize: state.pageSize,
      };
      const { data: res } = await selectReply(params);
      if (res.status === 0) {
        state.replyList = res.data;
        state.replyTotal = res.total;
      }
    };

    const handleCurrentChange = (val) => {
      state.page = val;
      getReply();
    };

    // 添加评论
    const addReplyMessage = async () => {
      if (!state.userId) {
        router.push("/login");
        ElMessage.warning("请先登录!");
      }
      const params = {
        message: state.message,
        userId: state.userId,
        commentId: state.id,
        time: new Date().getTime(),
      };
      const { data: res } = await addReply(params);
      if (res.status === 0) {
        state.message = "";
        getReply();
        ElMessage.success("发表成功！");
      }
    };

    // 删除评论
    const deleteReplyItem = async (id) => {
      const params = {
        id,
      };
      const { data: res } = await deleteReply(params);
      if (res.status === 0) {
        getReply();
        ElMessage.success("删除成功！");
      } else {
        ElMessage.error("删除失败！");
      }
    };

    return {
      ...toRefs(state),
      handleCurrentChange,
      addReplyMessage,
      deleteReplyItem,
    };
  },
};
</script>
