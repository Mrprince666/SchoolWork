<template>
  <div class="MLItem">
    <div class="MLItem_header">
      <span class="MLItem_header_name">实验室助理</span>
      <span class="MLItem_header_money">16元/小时</span>
    </div>
    <ul class="MLItem_des">
      <li class="MLItem_des_item">维护电脑</li>
      <li class="MLItem_des_item">每周清扫</li>
      <li class="MLItem_des_item">日常教师开门</li>
    </ul>
    <ul class="MLItem_request">
      <li class="MLItem_request_item">
        <img
          class="MLItem_request_item_img"
          src="../../../../assets/imgs/common/address-666.png"
        />
        <span class="MLItem_request_item_name">8栋教学楼</span>
      </li>
      <li class="MLItem_request_item">
        <img
          src="../../../../assets/imgs/common/time-666.png"
          class="MLItem_request_item_img"
        />
        <span>一周两次</span>
      </li>
      <li class="MLItem_request_item">
        <img
          src="../../../../assets/imgs/common/notebook-666.png"
          class="MLItem_request_item_img"
        />
        <span>两个学期</span>
      </li>
    </ul>
    <div class="MLItem_footer">
      <img
        class="MLItem_footer_img"
        src="../../../../assets/imgs/main/tengxu_logo.jpg"
      />
      <span class="MLItem_footer_name">网络空间安全学院</span>
    </div>
  </div>
</template>

<script>
import "./MLItem.scss";

export default {
  setup() {
    return {};
  },
};
</script>
