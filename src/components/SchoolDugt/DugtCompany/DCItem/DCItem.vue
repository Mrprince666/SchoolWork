<template>
  <div class="DCItem">
    <div class="DCItem_left">
      <img :src="company.pic" class="DCItem_img" />
      <div class="DCItem_content">
        <span class="DCItem_content_name">{{ company.fullName }}</span>
        <span class="DCItem_content_des">{{ company.territory }}</span>
      </div>
    </div>

    <span>{{ standardTime(+company.time) }}</span>
  </div>
</template>

<script>
import "./DCItem.scss";
import { standardTime } from "../../../../assets/js/standardTime";

export default {
  props: ["company"],

  setup() {
    return {
      standardTime,
    };
  },
};
</script>
