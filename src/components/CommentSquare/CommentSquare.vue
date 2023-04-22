<template>
  <div class="commentSquare">
    <div class="commentSquare_header">
      <span class="commentSquare_header_message">一起探索新世界！</span>
      <input
        class="commentSquare_header_input"
        type="text"
        placeholder="搜索关键词"
        v-model="input"
      />
      <button class="commentSquare_header_search" @click="searchComment">
        搜索
      </button>
      <button class="commentSquare_header_create" @click="gotoCreate">
        发动态
      </button>
    </div>
    <div class="commentSquare_content">
      <ul class="commentSquare_content_list">
        <li
          class="commentSquare_content_list_item"
          v-for="item in commentList"
          :key="item.id"
        >
          <CommitItem :comment="item" />
        </li>
      </ul>
      <div class="commentSquare_content_tab">
        <button
          :class="{
            commentSquare_content_tab_button: true,
            commentSquare_content_tab_active: type === 0,
          }"
          @click="changeTab(0)"
        >
          点赞最多
        </button>
        <button
          :class="{
            commentSquare_content_tab_button: true,
            commentSquare_content_tab_active: type === 1,
          }"
          @click="changeTab(1)"
        >
          最新
        </button>
      </div>
      <div class="commentSquare_pagination" v-if="total > pageCount">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageCount"
          :current-page="page"
          class="mt-4 commentSquare_pagination_page"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "./commentSquare.scss";
import { onMounted, reactive, toRefs } from "vue";
import { getComment } from "../../request/comment";
import CommitItem from "@/common/CommitItem/CommitItem.vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";

export default {
  components: {
    CommitItem,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      type: 1, // 0 点赞最多， 1按时间
      page: 1,
      pageCount: 10,
      commentList: [],
      total: 0,
      userId: store.state.user.userInfo.id,
      input: "",
    });

    onMounted(() => {
      getCommentList();
    });

    const getCommentList = async () => {
      const params = {
        type: state.type,
        page: state.page,
        pageCount: state.pageCount,
        input: state.input,
      };
      const { data: res } = await getComment(params);
      if (res.status === 0) {
        state.commentList = res.data;
        state.total = res.total;
      }
    };

    const changeTab = (tab) => {
      if (tab !== state.type) {
        state.type = tab;
        state.page = 1;
        getCommentList();
      }
    };

    const gotoCreate = () => {
      if (!state.userId) {
        router.push("/login");
        ElMessage.warning("请先登录");
      } else {
        router.push("/creationCenter");
      }
    };

    const handleCurrentChange = (val) => {
      state.page = val;
      getCommentList();
    };

    const searchComment = () => {
      getCommentList();
    };

    return {
      ...toRefs(state),
      changeTab,
      gotoCreate,
      handleCurrentChange,
      searchComment,
    };
  },
};
</script>
