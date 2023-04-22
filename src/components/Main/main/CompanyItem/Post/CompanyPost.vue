<template>
  <div class="CompanyPost">
    <div class="CompanyPost_top">
      <span>{{ positionInfo.name }}</span>
      <span class="CompanyPost_top_money" v-if="positionInfo.salaryType === 0">
        {{ positionInfo.salaryLow }}-{{ positionInfo.salaryUp }}K
      </span>
      <span class="CompanyPost_top_money" v-if="positionInfo.salaryType === 1">
        {{ positionInfo.salaryLow }}百/天
      </span>
      <span class="CompanyPost_top_money" v-if="positionInfo.salaryType === 2">
        {{ positionInfo.salaryLow }}元/小时
      </span>
    </div>
    <ul class="CompanyPost_tab">
      <li v-for="item in positionInfo.describe" :key="item.id">
        <span v-if="item.content">{{ item.content }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import "./CompanyPost.scss";

export default {
  props: ["positionInfo"],

  setup() {
    return {};
  },
};
</script>
