<template>
  <div class="MPCollect">
    <ul class="MPCollect_list">
      <li class="MPCollect_list_item" v-for="item in 4" :key="item">
        <CommitItem />
      </li>
    </ul>
  </div>
</template>

<script>
import "./MPCollect.scss";
import CommitItem from "../../../common/CommitItem/CommitItem.vue";

export default {
  components: {
    CommitItem,
  },
  setup() {
    return {};
  },
};
</script>
