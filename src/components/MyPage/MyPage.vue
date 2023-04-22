<template>
  <div class="MyPage">
    <div class="MyPage_left">
      <ul class="MyPage_tab">
        <li :class="{ MyPage_tab_active: tab === 0 }" @click="changeTab(0)">
          投递情况
        </li>
        <li :class="{ MyPage_tab_active: tab === 1 }" @click="changeTab(1)">
          发布
        </li>
        <!-- <li :class="{ MyPage_tab_active: tab === 2 }" @click="changeTab(2)">
          评论
        </li> -->
        <li :class="{ MyPage_tab_active: tab === 3 }" @click="changeTab(3)">
          收藏
        </li>
        <li :class="{ MyPage_tab_active: tab === 4 }" @click="changeTab(4)">
          个人信息
        </li>
      </ul>
      <div class="MyPage_content">
        <div v-show="tab === 0">
          <MPDelivery :countList="countList" />
        </div>
        <div v-show="tab === 1">
          <MPPublish />
          <!-- <MPNotThing /> -->
        </div>
        <!-- <div v-show="tab === 2">
          <MPComment />
        </div> -->
        <div v-show="tab === 3">
          <MPCollect />
        </div>
        <div v-show="tab === 4">
          <MPUserInfo />
        </div>
      </div>
    </div>
    <div class="MyPage_right">
      <div class="MyPage_personal">
        <MPPersonal :gotoUserInfo="gotoUserInfo" :countList="countList" />
      </div>
      <div class="MyPage_appendix">
        <MPAppendix />
      </div>
    </div>
  </div>
</template>

<script>
import "./MyPage.scss";
import MPPersonal from "./MPPersonal/MPPersonal.vue";
import MPDelivery from "./MPDelivery/MPDelivery.vue";
// import MPComment from "./MPComment/MPComment.vue";
import MPPublish from "./MPPublish/MPPublish.vue";
import MPCollect from "./MPCollect/MPCollect.vue";
// import MPNotThing from "./MPNotThing/MPNotThing.vue";
import { reactive, toRefs, onMounted } from "vue";
import MPAppendix from "./MPAppendix/MPAppendix.vue";
import MPUserInfo from "./MPUserInfo/MPUserInfo.vue";
import { getDeliverCount } from "../../request/user";
import { useStore } from "vuex";

export default {
  components: {
    MPPersonal,
    MPDelivery,
    // MPComment,
    MPPublish,
    MPCollect,
    // MPNotThing,
    MPAppendix,
    MPUserInfo,
  },

  setup() {
    const store = useStore();

    const state = reactive({
      tab: +sessionStorage.getItem("MyPage_tab") || 0,
      userId: store.state.user.userInfo.id,
      countList: {},
    });

    onMounted(() => {
      getDeliverCountList();
    });

    const changeTab = (tab) => {
      state.tab = tab;
      sessionStorage.setItem("MyPage_tab", tab);
    };

    const gotoUserInfo = () => {
      state.tab = 4;
      sessionStorage.setItem("MyPage_tab", 4);
    };

    const getDeliverCountList = async () => {
      const params = {
        userId: state.userId,
      };
      const { data: res } = await getDeliverCount(params);
      if (res.status === 0) {
        state.countList = res.data;
      }
    };

    return {
      ...toRefs(state),
      changeTab,
      gotoUserInfo,
    };
  },
};
</script>
