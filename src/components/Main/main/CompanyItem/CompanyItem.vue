<template>
  <div class="CompanyItem">
    <div class="CompanyItem_header"><CompanyHeader /></div>
    <div class="CompanyItem_post">
      <ul class="CompanyItem_post_ul">
        <li class="CompanyItem_post_li" v-for="item in 3" :key="item">
          <CompanyPost />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CompanyItem.scss";
import CompanyPost from "./Post/CompanyPost.vue";
import CompanyHeader from "./Header/CompanyHeader.vue";

export default {
  components: {
    CompanyHeader,
    CompanyPost,
  },
  setup() {
    return {};
  },
};
</script>
