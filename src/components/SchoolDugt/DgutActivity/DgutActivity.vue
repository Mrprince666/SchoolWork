<template>
  <div class="DgutActivity">
    <ul class="DgutActivity_list">
      <li
        class="DgutActivity_list_item"
        v-for="item in activityList"
        :key="item.id"
        @click="gotoDetails(item.id)"
      >
        <DAItem :activity="item" />
      </li>
    </ul>
    <div class="DgutActivity_pagination" v-if="total > pageCount">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageCount"
        :current-page="page"
        class="mt-4 DgutActivity_pagination_page"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import "./DgutActivity.scss";
import DAItem from "./DAItem/DAItem.vue";
import { useRouter } from "vue-router";
import { getActivityList } from "../../../request/school";
import { reactive, toRefs, onMounted } from "vue";

export default {
  components: {
    DAItem,
  },

  setup() {
    const router = useRouter();
    const state = reactive({
      activityList: [],
      total: 0,
      page: 1,
      pageCount: 5,
    });

    onMounted(() => {
      getList();
    });

    const gotoDetails = (id) => {
      router.push({
        path: "/briefingDetails",
        query: {
          id,
        },
      });
    };

    const getList = async () => {
      const params = {
        page: state.page,
        pageCount: state.pageCount,
      };
      const { data: res } = await getActivityList(params);
      if (res.status === 0) {
        state.activityList = res.data;
        state.total = res.total;
      }
    };

    const handleCurrentChange = (val) => {
      state.page = val;
      getList();
    };

    return {
      ...toRefs(state),
      gotoDetails,
      handleCurrentChange,
    };
  },
};
</script>
