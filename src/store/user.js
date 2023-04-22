export default {
  namespaced: true,
  state: {
    token: sessionStorage.getItem("token") || "",
    userInfo: JSON.parse(sessionStorage.getItem("userInfo")) || {},
  },
  getters: {},
  mutations: {
    // 存储用户信息
    setUserInfo(state, data) {
      state.userInfo = JSON.parse(JSON.stringify(data));
      sessionStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    // 存储token
    setToken(state, data) {
      state.token = data;
      sessionStorage.setItem("token", state.token);
    },
    deleteUserInfo(state) {
      state.userInfo = {};
      state.token = "";
      sessionStorage.removeItem("userInfo");
      sessionStorage.removeItem("token");
    },
  },
  actions: {},
};
