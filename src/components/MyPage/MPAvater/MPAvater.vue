<template>
  <div class="MPAvater">
    <div class="MPAvater_left">
      <img :src="pic" alt="" />
    </div>
    <div class="MPAvater_right">
      <div class="MPAvater_right_name">{{ userName }}</div>
      <div class="MPAvater_right_content">
        <span class="MPAvater_right_content_time">{{
          standardAllTime(+time)
        }}</span>
        <span class="MPAvater_right_content_school">{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import "./MPAvater.scss";
import { standardAllTime } from "../../../assets/js/standardTime";

export default {
  props: ["time", "pic", "userName", "name"],

  setup() {
    return {
      standardAllTime,
    };
  },
};
</script>
