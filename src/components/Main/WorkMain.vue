<template>
  <div class="Main">
    <div class="Main_slide">
      <Slide />
    </div>
    <div class="Main_commit">
      <MainCommit />
    </div>
    <div class="Main_content">
      <div class="Main_item">
        <div class="Main_item_title"># 热门职位</div>
        <MainTab />
        <div class="Main_item_content">
          <ul class="Main_item_content_ul">
            <li v-for="item in 7" :key="item"><WorkItem /></li>
          </ul>
        </div>
      </div>
      <div class="Main_item">
        <div class="Main_item_title"># 热门企业</div>
        <div class="Main_item_content">
          <ul class="Main_item_content_ul">
            <li v-for="item in 7" :key="item"><CompanyItem /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./WorkMain.scss";
import MainTab from "./main/tab/MainTab.vue";
import WorkItem from "./main/WorkItem/WorkItem.vue";
import Slide from "../home/Slide/WorkSlide.vue";
import CompanyItem from "./main/CompanyItem/CompanyItem.vue";
import MainCommit from "./main/Comment/MainComment.vue";

export default {
  components: {
    Slide,
    MainTab,
    WorkItem,
    CompanyItem,
    MainCommit,
  },
  setup() {
    return {};
  },
};
</script>
