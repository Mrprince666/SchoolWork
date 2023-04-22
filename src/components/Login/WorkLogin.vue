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
        <div class="Login_right_form" v-else>
          <input
            type="text"
            v-model="register.phone"
            placeholder="请输入手机号"
            class="Login_right_form_input"
          />
          <input
            type="password"
            v-model="register.password"
            placeholder="请输密码"
            class="Login_right_form_input"
          />
          <input
            type="text"
            v-model="register.userName"
            placeholder="请输用户名"
            class="Login_right_form_input"
          />
        </div>
        <button class="Login_right_button" @click="handleButton">
          {{ activeName === "login" ? "登录" : "注册" }}
        </button>
        <div class="Login_right_text">我要招聘</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import Logo from "../../common/Logo/WorkLogo.vue";
import "./WorkLogin.scss";
import { register, login } from "../../request/user.js";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";

export default {
  components: {
    Logo,
  },
  setup() {
    const router = useRouter();
    // const route = useRoute();
    const store = useStore();

    const state = reactive({
      activeName: "login",
      loginForm: {
        phone: "",
        password: "",
        type: 0,
      },
      register: {
        phone: "",
        password: "",
        userName: "",
      },
    });

    // 修改tab状态
    const changeTab = (tab) => {
      state.activeName = tab;
    };

    const handleButton = () => {
      state.activeName === "login" ? userLogin() : userRegister();
    };

    const userLogin = async () => {
      if (
        state.loginForm.phone.trim() === "" ||
        state.loginForm.password.trim() === ""
      ) {
        ElMessage.error("信息未填写完整!");
        return;
      }
      const { data: res } = await login(state.loginForm);
      if (res.status === 0) {
        store.commit("user/setToken", res.token);
        store.commit("user/setUserInfo", res.data);
        router.go(-1);
        ElMessage.success(res.message);
      } else {
        ElMessage.error(res.message);
      }
    };

    const userRegister = async () => {
      if (
        state.register.phone.trim() === "" ||
        state.register.password.trim() === "" ||
        state.register.userName.trim() === ""
      ) {
        ElMessage.error("信息未填写完整!");
        return;
      }
      const { data: res } = await register(state.register);
      if (res.status === 0) {
        ElMessage.success(res.message);
        state.loginForm.password = state.register.password;
        state.loginForm.phone = state.register.phone;
        state.register.password = "";
        state.register.phone = "";
        state.register.userName = "";
        state.activeName = "login";
      } else {
        ElMessage.error(res.message);
      }
    };

    return {
      ...toRefs(state),
      changeTab,
      userRegister,
      userLogin,
      handleButton,
    };
  },
};
</script>
