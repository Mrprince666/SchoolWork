<template>
  <div class="Login_login">
    <div class="Login_container">
      <div class="Login_left">
        <span class="Login_logo"><Logo :width="100" /></span>
        <span class="Login_left_name">东理网</span>
        <span class="Login_left_context">
          <span class="Login_left_text">专注于应届生</span>
          <span class="Login_left_text">专注于本校生</span>
          <span class="Login_left_text">高薪工作</span>
        </span>
      </div>
      <div class="Login_right">
        <div class="Login_right_tab">
          <span
            class="Login_right_tab_item"
            :class="activeName === 'login' ? 'Login_active' : ''"
            @click="changeTab('login')"
            >登录</span
          >
          <span
            class="Login_right_tab_item"
            :class="activeName === 'register' ? 'Login_active' : ''"
            @click="changeTab('register')"
            >注册</span
          >
        </div>
        <div class="Login_right_form" v-if="activeName === 'login'">
          <input
            type="text"
            v-model="loginForm.phone"
            placeholder="请输入手机号"
            class="Login_right_form_input"
          />
          <input
            type="password"
            v-model="loginForm.password"
            placeholder="请输密码"
            class="Login_right_form_input"
          />
        </div>
        <div class="Login_right_form" v-else>111</div>
        <button class="Login_right_button">
          {{ activeName === "login" ? "登录" : "注册" }}
        </button>
        <div class="Login_right_text">我要招聘</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
// import { useRouter, useRoute } from "vue-router";
import Logo from "../../common/Logo/WorkLogo.vue";
import "./WorkLogin.scss";
// import { useStore } from "vuex";
// import { ElMessage } from "element-plus";

export default {
  components: {
    Logo,
  },
  setup() {
    // const router = useRouter();
    // const route = useRoute();
    // const store = useStore();

    const state = reactive({
      activeName: "login",
      loginForm: {
        phone: "",
        password: "",
      },
    });

    // 修改tab状态
    const changeTab = (tab) => {
      state.activeName = tab;
    };

    return {
      ...toRefs(state),
      changeTab,
    };
  },
};
</script>
