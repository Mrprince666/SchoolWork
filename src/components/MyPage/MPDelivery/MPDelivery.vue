<template>
  <div class="MPDelivery">
    <ul class="MPDelivery_tab">
      <li :class="{ MPDelivery_tab_active: tab === 0 }" @click="changeTab(0)">
        已投递({{ countList.one }})
      </li>
      <li :class="{ MPDelivery_tab_active: tab === 1 }" @click="changeTab(1)">
        被查看({{ countList.two }})
      </li>
      <li :class="{ MPDelivery_tab_active: tab === 2 }" @click="changeTab(2)">
        已通过({{ countList.three }})
      </li>
      <li :class="{ MPDelivery_tab_active: tab === 3 }" @click="changeTab(3)">
        不合适({{ countList.four }})
      </li>
    </ul>
    <div class="MPDelivery_content">
      <div class="MPDelivery_position">
        <ul class="MPDelivery_position_list">
          <li
            class="MPDelivery_position_list_li"
            v-for="item in list"
            :key="item.id"
            @click="gotoDetails(item.id)"
          >
            <MPDItem :position="item" />
          </li>
        </ul>
        <div v-if="list.length === 0" class="MPDelivery_position_nothing">
          还没有信息哦！
        </div>
        <div
          class="MPDelivery_pagination"
          v-if="countList[countName[tab]] > pageCount"
        >
          <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="countList[countName[tab]]"
            :page-size="pageCount"
            :current-page="page"
            class="mt-4 MPDelivery_pagination_page"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./MPDelivery.scss";
import MPDItem from "./MPDItem/MPDItem.vue";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { getPositionDeliver } from "../../../request/position";
import { useRouter } from "vue-router";

export default {
  components: {
    MPDItem,
  },

  props: ["countList"],

  setup() {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      tab: +sessionStorage.getItem("MPDelivery_tab") || 0,
      page: 1,
      pageCount: 5,
      userId: store.state.user.userInfo.id,
      list: [],
    });

    const countName = ["one", "two", "three", "four"];

    onMounted(() => {
      getList();
    });

    const getList = async () => {
      const params = {
        userId: state.userId,
        page: state.page,
        pageCount: state.pageCount,
        state: state.tab,
      };
      const { data: res } = await getPositionDeliver(params);
      if (res.status === 0) {
        state.list = res.data;
      }
    };

    const changeTab = (tab) => {
      state.tab = tab;
      sessionStorage.setItem("MPDelivery_tab", tab);
      getList();
    };

    const handleCurrentChange = (page) => {
      state.page = page;
      getList();
    };

    const gotoDetails = (positionId) => {
      router.push({
        path: "/positionDetails",
        query: {
          positionId,
        },
      });
    };

    return {
      ...toRefs(state),
      changeTab,
      countName,
      handleCurrentChange,
      gotoDetails,
    };
  },
};
</script>
