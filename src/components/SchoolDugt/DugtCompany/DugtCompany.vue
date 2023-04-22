<template>
  <div class="DugtCompany">
    <ul class="DugtCompany_list">
      <li
        class="DugtCompany_list_item"
        v-for="item in companyList"
        :key="item.id"
        @click="gotoDetails(item.id)"
      >
        <DCItem :company="item" />
      </li>
    </ul>
    <div class="DugtCompany_pagination" v-if="total > pageCount">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pageCount"
        :current-page="page"
        class="mt-4 DugtCompany_pagination_page"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import "./DugtCompany.scss";
import DCItem from "./DCItem/DCItem.vue";
import { useRouter } from "vue-router";
import { getCompanyList } from "../../../request/school";
import { reactive, toRefs, onMounted } from "vue";

export default {
  components: {
    DCItem,
  },

  setup() {
    const router = useRouter();
    const state = reactive({
      companyList: [],
      total: 0,
      page: 1,
      pageCount: 5,
    });

    onMounted(() => {
      getList();
    });

    const gotoDetails = (companyId) => {
      router.push({
        path: "/CompanyDetails",
        query: {
          companyId,
        },
      });
    };

    const getList = async () => {
      const params = {
        page: state.page,
        pageCount: state.pageCount,
      };
      const { data: res } = await getCompanyList(params);
      if (res.status === 0) {
        state.companyList = res.data;
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
