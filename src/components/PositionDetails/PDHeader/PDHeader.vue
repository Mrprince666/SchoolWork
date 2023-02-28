<template>
  <div class="PDHeader">
    <div class="PDHeader_header">
      <div class="PDHeader_header_main">
        <div class="PDHeader_header_main_message">
          <span class="PDHeader_header_main_message_name">产品经理</span>
          <span class="PDHeader_header_main_message_money">15-30K * 14薪</span>
        </div>
        <div class="PDHeader_header_main_right">
          <button
            class="PDHeader_header_main_right_collect"
            @click="changeIsCollect"
          >
            <img
              width="18"
              height="18"
              v-if="!isCollect"
              src="../../../assets/imgs/common/collect.png"
              alt=""
            />
            <img
              width="18"
              height="18"
              v-else
              src="../../../assets/imgs/common/collect-active.png"
              alt=""
            />
            <span>收藏</span>
          </button>
          <button class="PDHeader_header_main_right_apply">立即申请</button>
        </div>
      </div>
    </div>
    <div class="PDHeader_key"></div>
  </div>
</template>

<script>
import "./PDHeader.scss";
import { reactive, toRefs } from "vue";

export default {
  // components: {
  //   Collect,
  // },

  setup() {
    const state = reactive({
      isCollect: false,
    });

    const changeIsCollect = () => {
      state.isCollect = !state.isCollect;
    };

    return {
      ...toRefs(state),
      changeIsCollect,
    };
  },
};
</script>
