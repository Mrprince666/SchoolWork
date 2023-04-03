<template>
  <div class="">
    <ul class="MainTab_ul">
      <li
        :class="{ active: activeTab === item.id }"
        v-for="item in tabs"
        :key="item.id"
        @click="changePositionTab(item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import "./MainTab.scss";

export default {
  props: ["tabs", "activeTab", "changePositionTab"],

  setup() {
    return {};
  },
};
</script>
