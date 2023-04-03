<template>
  <div class="CRoomLeftHr">
    <div class="CRoomLeftHr_img">
      <img src="../../../../assets/imgs/main/tengxu_logo.jpg" alt="" />
    </div>
    <div class="CRoomLeftHr_right">
      <div class="CRoomLeftHr_right_info">
        <div class="CRoomLeftHr_right_info_content">
          <span class="CRoomLeftHr_right_info_content_name">{{
            userInfo.userName
          }}</span>
          <span class="CRoomLeftHr_right_info_content_company">{{
            userInfo.shortName
          }}</span>
          <span class="CRoomLeftHr_right_info_content_position">{{
            userInfo.position
          }}</span>
        </div>
        <div class="CRoomLeftHr_right_info_time">
          {{ standardTime(+roomInfo.time) }}
        </div>
      </div>
      <div class="CRoomLeftHr_right_message">
        <span class="CRoomLeftHr_right_message_content">{{
          roomInfo.message
        }}</span>
        <span class="CRoomLeftHr_right_message_img">
          <img src="../../../../assets/imgs/common/delete.png" alt="" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import "./CRoomLeftHr.scss";
import { standardTime } from "../../../../assets/js/standardTime";
import { getOtherList } from "../../../../request/chat";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  props: ["roomInfo"],

  setup(props) {
    const store = useStore();

    const state = reactive({
      userInfo: {},
    });
    onMounted(() => {
      getUserInfo();
    });

    const getUserInfo = async () => {
      const params = {
        otherId:
          props.roomInfo.otherId === props.userId
            ? props.roomInfo.oneId
            : props.roomInfo.otherId,
      };
      const { data: res } = await getOtherList(params);
      if (res.status === 0) {
        state.userInfo = res.data;
        store.commit("chat/setUserInfo", res.data);
      }
    };

    return {
      ...toRefs(state),
      standardTime,
    };
  },
};
</script>
