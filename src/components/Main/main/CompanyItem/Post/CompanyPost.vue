<template>
  <div class="CompanyPost">
    <div class="CompanyPost_top">
      <span>{{ positionInfo.name }}</span>
      <span class="CompanyPost_top_money"
        >{{ positionInfo.salaryLow }}-{{ positionInfo.salaryUp }}K</span
      >
    </div>
    <ul class="CompanyPost_tab">
      <li v-for="item in positionInfo.describe" :key="item.id">
        {{ item.content }}
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
