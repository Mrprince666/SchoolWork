<template>
  <div class="AuthorHeader">
    <img class="AuthorHeader_pic" :src="pic" alt="作者头像" />
    <div class="AuthorHeader_right">
      <div class="AuthorHeader_right_name">{{ userName }}</div>
      <div class="AuthorHeader_right_content">
        <span>{{ standardTime(+time) }}</span>
        <span>{{ position }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import "./AuthorHeader.scss";
import { standardTime } from "../../assets/js/standardTime";

export default {
  props: ["userName", "pic", "time", "position"],
  setup() {
    return {
      standardTime,
    };
  },
};
</script>
