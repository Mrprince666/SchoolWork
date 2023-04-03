import { createStore } from "vuex";
import user from "./user";
import chat from "./chat";

export default createStore({
  modules: {
    user,
    chat,
  },
});
