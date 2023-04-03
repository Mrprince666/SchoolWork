<template>
  <div class="CRoomRight">
    <div class="CRoomRight_header">
      <div class="CRoomRight_hr">
        <div class="CRoomRight_hr_left">
          <span>{{ otherUserInfo.userName }}</span>
          <span>{{ otherUserInfo.shortName }}</span>
          <span>{{ otherUserInfo.position }}</span>
        </div>
        <div class="CRoomRight_hr_right">
          <button class="CRoomRight_hr_right_first">置顶</button>
        </div>
      </div>
      <div class="CRoomRight_positoin">
        <span class="CRoomRight_positoin_name">{{ positionInfo.name }}</span>
        <span class="CRoomRight_positoin_money"
          >{{ positionInfo.salaryLow }}-{{ positionInfo.salaryUp }}K</span
        >
        <span class="CRoomRight_positoin_city">{{ positionInfo.city }}</span>
      </div>
    </div>
    <div class="CRoomRight_chat">
      <ul class="CRoomRight_chat_list" ref="chatDom">
        <li
          class="CRoomRight_chat_item"
          v-for="item in chatList"
          :key="item.id"
        >
          <span
            :class="{
              CRoomRight_chat_item_message: true,
              CRoomRight_chat_item_my: userId === item.userId,
              CRoomRight_chat_item_hr: userId !== item.userId,
            }"
            >{{ item.message }}</span
          >
        </li>
      </ul>
    </div>
    <div class="CRoomRight_footer">
      <div class="CRoomRight_footer_input">
        <textarea placeholder="快来沟通一下吧！" v-model="message"></textarea>
      </div>
      <div class="CRoomRight_footer_send">
        <button @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import "./CRoomRight.scss";
import { useStore } from "vuex";
import { reactive, toRefs, onMounted, ref } from "vue";
import { getPositionInfo, getChatList, addChat } from "../../../request/chat";

export default {
  setup() {
    const store = useStore();
    const chatDom = ref(null);
    const state = reactive({
      otherUserInfo: store.state.chat.otherUserInfo,
      roomInfo: store.state.chat.roomInfo,
      positionInfo: {},
      chatList: [],
      userId: store.state.user.userInfo.id,
      message: "",
    });

    onMounted(() => {
      getPosition();
      getChat();
      if (chatDom.value) {
        setTimeout(() => {
          chatDom.value.scrollTo({
            top: chatDom.value.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
      }
    });

    const getPosition = async () => {
      const params = {
        positionId: state.roomInfo.positionId,
      };
      const { data: res } = await getPositionInfo(params);
      if (res.status === 0) {
        state.positionInfo = res.data;
      }
    };

    // 获取聊天列表
    const getChat = async () => {
      const params = {
        chatroomId: state.roomInfo.id,
      };
      const { data: res } = await getChatList(params);
      if (res.status === 0) {
        state.chatList = res.data;
      }
    };

    // 发送聊天信息
    const sendMessage = async () => {
      const params = {
        chatroomId: state.roomInfo.id,
        userId: state.userId,
        time: new Date().getTime().toString(),
        message: state.message,
      };
      const { data: res } = await addChat(params);
      if (res.status === 0) {
        state.chatList.push(res.data);
        setTimeout(() => {
          chatDom.value.scrollTo({
            top: chatDom.value.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
        state.message = "";
      }
      console.log(res);
    };

    return {
      ...toRefs(state),
      chatDom,
      sendMessage,
    };
  },
};
</script>
