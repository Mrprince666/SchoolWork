<template>
  <div class="DAItem">
    <div class="DAItem_left">
      <div class="DAItem_image">
        <img class="DAItem_image_img" :src="activity.pic" />
      </div>
      <div class="DAItem_content">
        <div class="DAItem_content_name">
          {{ activity.title }}
        </div>
        <div class="DAItem_content_time">
          宣讲时间：{{ standardAllTime(+activity.startTime) }} 至
          {{ standardAllTime(+activity.endTime) }}
        </div>
        <div class="DAItem_content_address">地点：{{ activity.place }}</div>
      </div>
    </div>

    <div class="DAItem_right">
      <button class="DAItem_right_button">查看</button>
    </div>
  </div>
</template>

<script>
import "./DAItem.scss";
import { standardAllTime } from "../../../../assets/js/standardTime";

export default {
  props: ["activity"],

  setup() {
    return {
      standardAllTime,
    };
  },
};
</script>
