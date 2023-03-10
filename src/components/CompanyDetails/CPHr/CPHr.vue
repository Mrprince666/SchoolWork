<template>
  <div class="CPHr">
    <div class="CPHr_header">招聘者</div>
    <div class="CPHr_content">
      <ul class="CPHr_content_ul">
        <li v-for="item in 6" :key="item">
          <CPHrItem />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CPHr.scss";
import CPHrItem from "./CPHrItem/CPHrItem.vue";

export default {
  components: {
    CPHrItem,
  },

  setup() {
    return {};
  },
};
</script>
