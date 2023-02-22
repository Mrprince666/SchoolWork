<template>
  <div class="CommitContent">
    <div class="CommitContent_title">我们的差别在哪？</div>
    <div class="CommitContent_content">
      我是现在发现，好学校出来的工资和一般学校的工资能差不少，大厂效益好，能出得起钱，但一般学校的不太好进去，之前我和一个大厂的hr聊了下，因为学校不好，直接说我这种只能走外包的形势，外包一般就12薪了，不像大厂16薪的都有，这一下子收入差距就拉开了。
    </div>
    <div class="CommitContent_footer">
      <span class="CommitContent_footer_good">
        <img src="../../assets/imgs/common/good.png" alt="点赞" />
        <span class="CommitContent_footer_good_count">999</span>
      </span>
    </div>
  </div>
</template>

<script>
import "./CommitContent.scss";
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      isGood: false,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
