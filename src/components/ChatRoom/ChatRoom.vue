<template>
  <div class="ChatRoom">
    <div class="ChatRoom_left">
      <CRoomLeft />
    </div>
    <div class="ChatRoom_right">
      <CRoomRight />
    </div>
  </div>
</template>

<script>
import "./ChatRoom.scss";
import CRoomLeft from "./CRoomLeft/CRoomLeft.vue";
import CRoomRight from "./CRoomRight/CRoomRight.vue";

export default {
  components: {
    CRoomLeft,
    CRoomRight,
  },

  setup() {
    return {};
  },
};
</script>
