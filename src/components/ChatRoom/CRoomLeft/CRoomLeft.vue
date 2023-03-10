<template>
  <div class="CRoomLeft">
    <div class="CRoomLeft_header">30天内的消息</div>
    <div class="CRoomLeft_content">
      <ul class="CRoomLeft_content_list">
        <li
          v-for="item in 4"
          :key="item"
          :class="{ CRoomLeft_active: item === 1 }"
        >
          <CRoomLeftHr />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import "./CRoomLeft.scss";
import CRoomLeftHr from "./CRoomLeftHr/CRoomLeftHr.vue";

export default {
  components: {
    CRoomLeftHr,
  },

  setup() {
    return {};
  },
};
</script>
