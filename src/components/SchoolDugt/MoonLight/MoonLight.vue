<template>
  <div class="MoonLight">
    <ul class="MoonLight_list">
      <li
        class="MoonLight_list_item"
        v-for="item in list"
        :key="item.id"
        @click="gotoDetails(item.id)"
      >
        <MLItem :position="item" />
      </li>
    </ul>
    <div class="MoonLight_pagination" v-if="total > pageCount">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageCount"
        :current-page="page"
        class="mt-4 MoonLight_pagination_page"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import "./MoonLight.scss";
import MLItem from "./MLItem/MLItem.vue";
import { useRouter } from "vue-router";
import { getMoonlightList } from "../../../request/school";
import { reactive, toRefs, onMounted } from "vue";

export default {
  components: {
    MLItem,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      page: 1,
      pageCount: 9,
      total: 0,
      list: [],
    });

    onMounted(() => {
      getList();
    });

    const gotoDetails = (positionId) => {
      router.push({
        path: "/positionDetails",
        query: {
          positionId,
        },
      });
    };

    const handleCurrentChange = () => {};

    const getList = async () => {
      const params = {
        page: state.page,
        pageCount: state.pageCount,
      };
      const { data: res } = await getMoonlightList(params);
      if (res.status === 0) {
        state.list = res.data;
        state.total = res.total;
      }
    };

    return {
      ...toRefs(state),
      gotoDetails,
      handleCurrentChange,
    };
  },
};
</script>
