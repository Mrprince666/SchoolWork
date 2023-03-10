<template>
  <div class="MPPublish">
    <ul class="MPPublish_list">
      <li class="MPPublish_list_item" v-for="item in 3" :key="item">
        <MPPublishItem />
      </li>
    </ul>
  </div>
</template>

<script>
import "./MPPublish.scss";
import MPPublishItem from "./MPPublishItem/MPPublishItem.vue";

export default {
  components: {
    MPPublishItem,
  },
  setup() {
    return {};
  },
};
</script>
