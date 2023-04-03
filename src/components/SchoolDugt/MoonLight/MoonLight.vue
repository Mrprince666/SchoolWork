<template>
  <div class="MoonLight">
    <ul class="MoonLight_list">
      <li
        class="MoonLight_list_item"
        v-for="item in 9"
        :key="item"
        @click="gotoDetails"
      >
        <MLItem />
      </li>
    </ul>
    <div class="MoonLight_pagination" v-if="replyTotal !== 0">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
        :page-size="5"
        :current-page="1"
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

export default {
  components: {
    MLItem,
  },
  setup() {
    const router = useRouter();

    const gotoDetails = () => {
      router.push({
        path: "/positionDetails",
      });
    };
    return {
      gotoDetails,
    };
  },
};
</script>
