<template>
  <div class="MPCommentItem">
    <div class="MPCommentItem_avater">
      <MPAvater />
    </div>
    <div class="MPCommentItem_comment">回复: 多问多问多问多问多问多问</div>
    <div class="MPCommentItem_content">
      <span class="MPCommentItem_content_author">@江铮杰是江中集团的老子:</span>
      <span class="MPCommentItem_content_comment">
        评论区里指指点点，面试现场唯唯诺诺
      </span>
    </div>
    <div class="MPCommentItem_footer">
      <span class="MPCommentItem_footer_good">
        <img src="../../../../assets/imgs/common/good.png" alt="点赞" />
        <span class="MPCommentItem_footer_good_count">999</span>
      </span>
      <span class="MPCommentItem_footer_delete">
        <img src="../../../../assets/imgs/common/delete.png" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
import "./MPCommentItem.scss";
import MPAvater from "../../MPAvater/MPAvater.vue";

export default {
  components: {
    MPAvater,
  },

  setup() {
    return {};
  },
};
</script>
