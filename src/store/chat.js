export default {
  namespaced: true,
  state: {
    otherUserInfo:
      JSON.parse(sessionStorage.getItem("chat/otherUserInfo")) || {},
    roomInfo: JSON.parse(sessionStorage.getItem("chat/roomInfo")) || {},
  },
  getters: {},
  mutations: {
    setUserInfo(state, data) {
      state.otherUserInfo = data;
      sessionStorage.setItem(
        "chat/otherUserInfo",
        JSON.stringify(state.otherUserInfo)
      );
    },
    setRoomInfo(state, data) {
      state.roomInfo = data;
      sessionStorage.setItem("chat/roomInfo", JSON.stringify(state.roomInfo));
    },
  },
  actions: {},
};
