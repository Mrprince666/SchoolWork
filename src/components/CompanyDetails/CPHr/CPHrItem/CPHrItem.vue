<template>
  <div class="CPHrItem">
    <div class="CPHrItem_content">
      <img :src="hr.pic" alt="" />
      <div class="CPHrItem_content_messge">
        <span class="CPHrItem_content_messge_name">{{ hr.userName }}</span>
        <span class="CPHrItem_content_messge_position">{{ hr.name }}</span>
      </div>
    </div>
    <div class="CPHrItem_footer">
      在招职位：<span>{{ hr.num }}</span>
    </div>
  </div>
</template>

<script>
import "./CPHrItem.scss";

export default {
  props: ["hr"],

  setup() {
    return {};
  },
};
</script>
