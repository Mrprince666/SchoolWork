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
        <li
          @click="changeTab('schoolDgut')"
          :class="tab === 'schoolDgut' && 'Nav_tab_active'"
        >
          东莞理工
        </li>
        <li
          @click="changeTab('commentSquare')"
          :class="tab === 'commentSquare' && 'Nav_tab_active'"
        >
          广场
        </li>
      </ul>
    </div>
    <div class="Nav_search">
      <input type="text" placeholder="搜索职位、公司" v-model="input" />
      <span @click="gotoPosition">搜索</span>
    </div>
    <div class="Nav_right">
      <span class="Nav_right_com" v-if="!userId">去企业版</span>
      <button class="Nav_right_login" v-if="!userId" @click="logout">
        登录 / 注册
      </button>
      <button class="Nav_right_logout" v-if="userId" @click="logout">
        退出
      </button>
      <button class="Nav_right_user" v-if="userId" @click="gotoMyPage">
        个人中心
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import Logo from "../../../common/Logo/WorkLogo.vue";
import "./WorkNav.scss";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  components: {
    Logo,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      tab: sessionStorage.getItem("WorkNav_tab") || "main",
      userId: store.state.user.userInfo.id || "",
      input: "",
    });

    // 跳转tab
    const changeTab = (tab) => {
      state.tab = tab;
      sessionStorage.setItem("WorkNav_tab", tab);
      router.push(`/${tab}`);
    };

    // 跳转到个人中心
    const gotoMyPage = () => {
      router.push("/myPage");
    };

    const logout = () => {
      store.commit("user/deleteUserInfo");
      router.push("/login");
    };

    const gotoPosition = () => {
      router.push({
        path: "/position",
        query: {
          input: state.input,
        },
      });
    };

    return {
      ...toRefs(state),
      changeTab,
      gotoMyPage,
      logout,
      gotoPosition,
    };
  },
};
</script>

<style lang="scss" scoped></style>
