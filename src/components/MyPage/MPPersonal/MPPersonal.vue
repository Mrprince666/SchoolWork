<template>
  <div class="MPPersonal">
    <div class="MPPersonal_header">
      <div class="MPPersonal_img">
        <img src="../../../assets/imgs/main/tengxu_logo.jpg" alt="" />
      </div>
      <div class="MPPersonal_message">
        <div class="MPPersonal_message_name">王子豪</div>
        <ul class="MPPersonal_message_tab">
          <li>23岁</li>
          <li>23届应届生</li>
          <li>本科</li>
        </ul>
      </div>
    </div>
    <div class="MPPersonal_button">
      <button class="MPPersonal_button_edit">编辑信息</button>
    </div>
    <ul class="MPPersonal_footer">
      <li class="MPPersonal_footer_item">
        <span class="MPPersonal_footer_item_num">1000</span>
        <span>已投递</span>
      </li>
      <li class="MPPersonal_footer_item">
        <span class="MPPersonal_footer_item_num">100</span>
        <span>被查看</span>
      </li>
      <li class="MPPersonal_footer_item">
        <span class="MPPersonal_footer_item_num">0</span>
        <span>已通过</span>
      </li>
      <li class="MPPersonal_footer_item">
        <span class="MPPersonal_footer_item_num">0</span>
        <span>邀面试</span>
      </li>
    </ul>
  </div>
</template>

<script>
import "./MPPersonal.scss";

export default {
  setup() {
    return {};
  },
};
</script>
