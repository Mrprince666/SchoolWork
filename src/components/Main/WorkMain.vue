<template>
  <div class="Main">
    <div class="Main_slide">
      <Slide />
    </div>
    <div class="Main_commit">
      <MainCommit />
    </div>
    <div class="Main_content">
      <div class="Main_item">
        <div class="Main_item_title"># 热门职位</div>
        <MainTab
          :tabs="positionTabs"
          :activeTab="activePositionTab"
          :changePositionTab="changePositionTab"
        />
        <div class="Main_item_content">
          <ul class="Main_item_content_ul">
            <li
              v-for="item in positionList"
              :key="item.id"
              @click="gotoPositionDetails(item.id)"
            >
              <WorkItem :position="item" />
            </li>
          </ul>
        </div>
      </div>
      <div class="Main_item">
        <div class="Main_item_title"># 热门企业</div>
        <div class="Main_item_content">
          <ul class="Main_item_content_ul">
            <li v-for="item in companyList" :key="item.id">
              <CompanyItem :companyId="item.id" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./WorkMain.scss";
import MainTab from "./main/tab/MainTab.vue";
import WorkItem from "./main/WorkItem/WorkItem.vue";
import Slide from "../home/Slide/WorkSlide.vue";
import CompanyItem from "./main/CompanyItem/CompanyItem.vue";
import MainCommit from "./main/Comment/MainComment.vue";
import { reactive, toRefs, onMounted } from "vue";
import { getPositionHotTabs, getPositionHotList } from "../../request/position";
import { getHotCompanyList } from "../../request/company";
import { useRouter } from "vue-router";

export default {
  components: {
    Slide,
    MainTab,
    WorkItem,
    CompanyItem,
    MainCommit,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      positionTabs: [],
      activePositionTab: +sessionStorage.getItem("WorkMain_tab") || 0,
      positionList: [],
      companyList: [],
    });

    onMounted(() => {
      getPositionTab();
      getCompanyIdLsit();
    });

    // 获取热门职位的tabs
    const getPositionTab = async () => {
      const { data: res } = await getPositionHotTabs();
      if (res.status === 0) {
        state.positionTabs = res.data;
        state.activePositionTab = state.positionTabs[0].id;
        sessionStorage.setItem("WorkMain_tab", state.positionTabs[0].id);
        getPositionList();
      }
    };

    // 获取热门职位列表
    const getPositionList = async () => {
      const params = {
        tradeId: state.activePositionTab,
      };
      const { data: res } = await getPositionHotList(params);
      if (res.status === 0) {
        state.positionList = res.data;
      }
    };

    // 切换职位tab
    const changePositionTab = (tab) => {
      if (tab !== state.activePositionTab) {
        state.activePositionTab = tab;
        sessionStorage.setItem("WorkMain_tab", tab);
        getPositionList();
      }
    };

    // 获取热门公司列表id
    const getCompanyIdLsit = async () => {
      const { data: res } = await getHotCompanyList();
      if (res.status === 0) {
        state.companyList = res.data;
      }
    };

    const gotoPositionDetails = (positionId) => {
      router.push({
        path: "/positionDetails",
        query: {
          positionId,
        },
      });
    };

    return {
      ...toRefs(state),
      changePositionTab,
      gotoPositionDetails,
    };
  },
};
</script>
