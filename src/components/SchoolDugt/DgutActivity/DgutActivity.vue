<template>
  <div class="DgutActivity">
    <ul class="DgutActivity_list">
      <li
        class="DgutActivity_list_item"
        v-for="item in 5"
        :key="item"
        @click="gotoDetails"
      >
        <DAItem />
      </li>
    </ul>
    <div class="DgutActivity_pagination" v-if="replyTotal !== 0">
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="10"
        :page-size="5"
        :current-page="1"
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

export default {
  components: {
    DAItem,
  },

  setup() {
    const router = useRouter();

    const gotoDetails = () => {
      router.push({
        path: "/briefingDetails",
      });
    };
    return {
      gotoDetails,
    };
  },
};
</script>
