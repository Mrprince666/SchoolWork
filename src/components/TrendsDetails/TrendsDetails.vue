<template>
  <div class="TrendsDetails">
    <div class="TrendsDetails_text">
      <CommitItem />
    </div>
    <div class="TrendsDetails_write">
      <input
        type="text"
        placeholder="快来评论一下吧！"
        class="TrendsDetails_write_input"
      />
      <button class="TrendsDetails_write_btn">评论</button>
    </div>
    <div class="TrendsDetails_footer">
      <div class="TrendsDetails_title">全部评论</div>
      <div class="TrendsDetails_comment"></div>
    </div>
  </div>
</template>

<script>
import "./TrendsDetails.scss";
import CommitItem from "../../common/CommitItem/CommitItem.vue";

export default {
  components: {
    CommitItem,
  },

  setup() {
    return {};
  },
};
</script>
