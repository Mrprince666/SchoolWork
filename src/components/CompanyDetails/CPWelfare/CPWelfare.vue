<template>
  <div class="CPWelfare">
    <div class="CPWelfare_header">工作时间及福利</div>
    <div class="CPWelfare_item">
      <img src="../../../assets/imgs/common/time.png" alt="" />
      <span>上午10:00 - 下午07:00</span>
    </div>
    <div class="CPWelfare_item">
      <img src="../../../assets/imgs/common/holiday.png" alt="" />
      <span>双休、弹性工作</span>
    </div>
    <div class="CPWelfare_content">
      <ul class="CPWelfare_content_ul">
        <li v-for="item in 8" :key="item">五险一金</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CPWelfare.scss";

export default {
  setup() {
    return {};
  },
};
</script>
