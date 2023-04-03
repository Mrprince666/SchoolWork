<template>
  <div class="CRoomLeft">
    <div class="CRoomLeft_header">全部消息</div>
    <div class="CRoomLeft_content">
      <ul class="CRoomLeft_content_list">
        <li
          v-for="item in chatroomList"
          :key="item.id"
          :class="{ CRoomLeft_active: item.id === activeRoom }"
        >
          <CRoomLeftHr :roomInfo="item" :userId="userId" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import "./CRoomLeft.scss";
import CRoomLeftHr from "./CRoomLeftHr/CRoomLeftHr.vue";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { getRoomList } from "../../../request/chat";

export default {
  components: {
    CRoomLeftHr,
  },

  setup() {
    const store = useStore();
    const state = reactive({
      userId: store.state.user.userInfo.id,
      chatroomList: [],
      activeRoom: 0,
    });

    onMounted(() => {
      getListRoom();
    });

    const getListRoom = async () => {
      const params = {
        userId: state.userId,
      };
      const { data: res } = await getRoomList(params);
      if (res.status === 0) {
        state.chatroomList = res.data;
        if (res.data.length) {
          state.activeRoom = res.data[0].id;
          store.commit("chat/setRoomInfo", res.data[0]);
        }
      }
    };
    return {
      ...toRefs(state),
    };
  },
};
</script>
