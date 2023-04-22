<template>
  <div class="MPPersonal">
    <div class="MPPersonal_header">
      <div class="MPPersonal_img">
        <img :src="userInfo.pic" alt="" />
      </div>
      <div class="MPPersonal_message">
        <div class="MPPersonal_message_name">{{ userInfo.userName }}</div>
        <ul class="MPPersonal_message_tab">
          <li v-if="userInfo.age">{{ userInfo.age }}岁</li>
          <li v-if="userInfo.graduation">{{ userInfo.graduation }}</li>
        </ul>
      </div>
    </div>
    <div class="MPPersonal_button">
      <button class="MPPersonal_button_edit" @click="gotoUserInfo">
        编辑信息
      </button>
    </div>
    <ul class="MPPersonal_footer">
      <li class="MPPersonal_footer_item">
        <span class="MPPersonal_footer_item_num">{{ countList.one }}</span>
        <span>已投递</span>
      </li>
      <li class="MPPersonal_footer_item">
        <span class="MPPersonal_footer_item_num">{{ countList.two }}</span>
        <span>被查看</span>
      </li>
      <li class="MPPersonal_footer_item">
        <span class="MPPersonal_footer_item_num">{{ countList.three }}</span>
        <span>已通过</span>
      </li>
      <li class="MPPersonal_footer_item">
        <span class="MPPersonal_footer_item_num">{{ countList.four }}</span>
        <span>邀面试</span>
      </li>
    </ul>
  </div>
</template>

<script>
import "./MPPersonal.scss";
import { useStore } from "vuex";
import { reactive, toRefs, watch } from "vue";

export default {
  props: ["gotoUserInfo", "countList"],

  setup() {
    const store = useStore();
    const state = reactive({
      userInfo: store.state.user.userInfo,
    });

    watch(
      () => store.state.user.userInfo,
      (val) => {
        state.userInfo = val;
      },
      { immediate: true }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>
