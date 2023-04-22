<template>
  <div class="CPWelfare">
    <div class="CPWelfare_header">工作时间及福利</div>
    <div class="CPWelfare_item">
      <img src="../../../assets/imgs/common/time.png" alt="" />
      <span>{{ workTimeStart }} - {{ workTimeEnd }}</span>
    </div>
    <div class="CPWelfare_item">
      <img src="../../../assets/imgs/common/holiday.png" alt="" />
      <span>{{ workTimeType }}</span>
    </div>
    <div class="CPWelfare_content">
      <ul class="CPWelfare_content_ul">
        <li v-for="item in treatment" :key="item.id">{{ item.content }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CPWelfare.scss";

export default {
  props: ["workTimeEnd", "workTimeStart", "workTimeType", "treatment"],
  setup() {
    return {};
  },
};
</script>
