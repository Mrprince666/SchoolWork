<template>
  <div class="CPHr">
    <div class="CPHr_header">招聘者</div>
    <div class="CPHr_content">
      <ul class="CPHr_content_ul">
        <li v-for="item in list" :key="item.id">
          <CPHrItem :hr="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CPHr.scss";
import CPHrItem from "./CPHrItem/CPHrItem.vue";

export default {
  props: ["list"],
  components: {
    CPHrItem,
  },

  setup() {
    return {};
  },
};
</script>
