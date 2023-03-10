<template>
  <div class="Nav_nav">
    <div class="Nav_left">
      <div class="Nav_logo">
        <Logo :width="50" />
        <span class="Nav_logo_text">东理</span>
      </div>
      <ul class="Nav_tab">
        <li
          @click="changeTab('main')"
          :class="tab === 'main' && 'Nav_tab_active'"
        >
          首页
        </li>
        <li
          @click="changeTab('position')"
          :class="tab === 'position' && 'Nav_tab_active'"
        >
          职位
        </li>
        <li>校园</li>
        <li>东莞理工</li>
        <li>兼职</li>
        <li>广场</li>
      </ul>
    </div>
    <div class="Nav_search">
      <input type="text" placeholder="搜索职位、公司" />
      <span>搜索</span>
    </div>
    <div class="Nav_right">
      <span class="Nav_right_com" @click="gotoMyPage">去企业版</span>
      <button class="Nav_right_login">
        <router-link to="/login">登录 / 注册</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Logo from "../../../common/Logo/WorkLogo.vue";
import "./WorkNav.scss";
import { useRouter } from "vue-router";

export default {
  components: {
    Logo,
  },

  setup() {
    const router = useRouter();

    const state = reactive({
      tab: "main",
    });

    // 跳转tab
    const changeTab = (tab) => {
      state.tab = tab;
      router.push(`/${tab}`);
    };

    // 跳转到个人中心
    const gotoMyPage = () => {
      router.push("/myPage");
    };

    return {
      ...toRefs(state),
      changeTab,
      gotoMyPage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
