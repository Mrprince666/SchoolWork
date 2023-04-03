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
        <li :class="{ MyPage_tab_active: tab === 2 }" @click="changeTab(2)">
          评论
        </li>
        <li :class="{ MyPage_tab_active: tab === 3 }" @click="changeTab(3)">
          收藏
        </li>
        <li :class="{ MyPage_tab_active: tab === 4 }" @click="changeTab(4)">
          个人信息
        </li>
      </ul>
      <div class="MyPage_content">
        <div v-show="tab === 0">
          <MPDelivery />
        </div>
        <div v-show="tab === 1">
          <MPPublish />
          <!-- <MPNotThing /> -->
        </div>
        <!-- <div v-show="tab === 2">
          <MPComment />
        </div> -->
        <!-- <div v-show="tab === 3">
          <MPCollect />
        </div> -->
        <div v-show="tab === 4">
          <MPUserInfo />
        </div>
      </div>
    </div>
    <div class="MyPage_right">
      <div class="MyPage_personal">
        <MPPersonal />
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
// import MPCollect from "./MPCollect/MPCollect.vue";
// import MPNotThing from "./MPNotThing/MPNotThing.vue";
import { reactive, toRefs } from "vue";
import MPAppendix from "./MPAppendix/MPAppendix.vue";
import MPUserInfo from "./MPUserInfo/MPUserInfo.vue";

export default {
  components: {
    MPPersonal,
    MPDelivery,
    // MPComment,
    MPPublish,
    // MPCollect,
    // MPNotThing,
    MPAppendix,
    MPUserInfo,
  },

  setup() {
    const state = reactive({
      tab: 0,
    });

    const changeTab = (tab) => {
      state.tab = tab;
    };

    return {
      ...toRefs(state),
      changeTab,
    };
  },
};
</script>
