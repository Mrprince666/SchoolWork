<template>
  <div class="WorkPosition">
    <div class="WorkPosition_header">
      <div class="WorkPosition_search">
        <div class="WorkPosition_search_container">
          <input
            class="WorkPosition_search_input"
            type="text"
            placeholder="搜索职位"
          />
          <span class="WorkPosition_search_sousuo">搜索</span>
        </div>
      </div>
      <div class="WorkPosition_hot">
        <div class="WorkPosition_hot_com">
          <span class="WorkPosition_hot_name">热门城市:</span>
          <ul class="WorkPosition_hot_ul">
            <li>深圳</li>
            <li>广州</li>
            <li>北京</li>
            <li>上海</li>
            <li>杭州</li>
            <li>东莞</li>
          </ul>
          <span class="WorkPosition_hot_clear">清空选项</span>
        </div>
        <div class="WorkPosition_hot_com WorkPosition_hot_position">
          <span class="WorkPosition_hot_name">热门职位:</span>
          <ul class="WorkPosition_hot_ul">
            <li>web前端</li>
            <li>java后端</li>
            <li>测试开发</li>
            <li>产品经理</li>
            <li>销售</li>
            <li>算法工程师</li>
          </ul>
        </div>
      </div>
      <div class="WorkPosition_selection"></div>
    </div>
  </div>
</template>

<script>
import "./WorkPosition.scss";

export default {
  setup() {
    return {};
  },
};
</script>
