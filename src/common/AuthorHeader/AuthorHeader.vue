<template>
  <div class="AuthorHeader">
    <img
      class="AuthorHeader_pic"
      src="../../assets/imgs/main/author.png"
      alt="作者头像"
    />
    <div class="AuthorHeader_right">
      <div class="AuthorHeader_right_name">神经病中的神经病</div>
      <div class="AuthorHeader_right_content">
        <span>{{ standardTime(new Date()) }}</span>
        <span>东莞皇家理工学院_2019</span>
      </div>
    </div>
  </div>
</template>

<script>
import "./AuthorHeader.scss";
import { standardTime } from "../../assets/js/standardTime";

export default {
  setup() {
    return {
      standardTime,
    };
  },
};
</script>
