<template>
  <div class="DugtCompany">
    <ul class="DugtCompany_list">
      <li
        class="DugtCompany_list_item"
        v-for="item in 5"
        :key="item"
        @click="gotoDetails"
      >
        <DCItem />
      </li>
    </ul>
    <div class="DugtCompany_pagination" v-if="replyTotal !== 0">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="10"
        :page-size="5"
        :current-page="1"
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

export default {
  components: {
    DCItem,
  },

  setup() {
    const router = useRouter();

    const gotoDetails = () => {
      router.push({
        path: "/CompanyDetails",
      });
    };
    return {
      gotoDetails,
    };
  },
};
</script>
