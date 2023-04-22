<template>
  <div class="MPPublish">
    <ul class="MPPublish_list">
      <li class="MPPublish_list_item" v-for="item in list" :key="item.id">
        <MPPublishItem :comment="item" :deleteCommentItem="deleteCommentItem" />
      </li>
    </ul>
    <div>
      <MPNotThing v-if="list.length === 0" />
    </div>
    <div class="MPPublish_pagination" v-if="total > pageCount">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageCount"
        :current-page="page"
        class="mt-4 MPPublish_pagination_page"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import "./MPPublish.scss";
import MPPublishItem from "./MPPublishItem/MPPublishItem.vue";
import MPNotThing from "../MPNotThing/MPNotThing.vue";
import { getMyComment } from "../../../request/user";
import { deleteComment } from "../../../request/comment";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";

export default {
  components: {
    MPPublishItem,
    MPNotThing,
  },
  setup() {
    const store = useStore();

    const state = reactive({
      page: 1,
      pageCount: 5,
      total: 0,
      list: [],
      userId: store.state.user.userInfo.id || "",
    });

    onMounted(() => {
      getList();
    });

    const getList = async () => {
      const parmas = {
        userId: state.userId,
        page: state.page,
        pageCount: state.pageCount,
      };
      const { data: res } = await getMyComment(parmas);
      if (res.status === 0) {
        state.total = res.total;
        state.list = res.data;
      }
    };

    const handleCurrentChange = (page) => {
      state.page = page;
      getList();
    };

    const deleteCommentItem = async (id) => {
      const params = {
        id,
      };
      const { data: res } = await deleteComment(params);
      if (res.status === 0) {
        getList();
        ElMessage.success(res.message);
      } else {
        ElMessage.error(res.message);
      }
    };

    return {
      ...toRefs(state),
      handleCurrentChange,
      deleteCommentItem,
    };
  },
};
</script>
