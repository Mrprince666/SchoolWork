<template>
  <div class="MPPublishItem">
    <div class="MPPublishItem_avater">
      <MPAvater />
    </div>
    <div class="MPPublishItem_title">前端工程师前端工程师前端工程师</div>
    <div class="MPPublishItem_content">
      <span class="MPPublishItem_content_message">
        难难难啊1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </span>
      <div class="MPPublishItem_content_more" @click="gotoTrendsDetails">
        查看更多
      </div>
    </div>
    <div class="MPPublishItem_footer">
      <span class="MPPublishItem_footer_good">
        <img src="../../../../assets/imgs/common/good.png" alt="点赞" />
        <span class="MPPublishItem_footer_good_count">999</span>
      </span>
      <div class="MPPublishItem_footer_right">
        <span>编辑</span>
        <span>删除</span>
        <span>仅自己可见</span>
      </div>
    </div>
  </div>
</template>

<script>
import "./MPPublishItem.scss";
import MPAvater from "../../MPAvater/MPAvater.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    MPAvater,
  },
  setup() {
    const router = useRouter();
    const gotoTrendsDetails = () => {
      router.push({
        path: "/trendsDetails",
      });
    };
    return {
      gotoTrendsDetails,
    };
  },
};
</script>
