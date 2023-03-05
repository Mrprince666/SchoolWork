<template>
  <div class="PDComment">
    <div class="PDComment_header">职位评论</div>
    <div class="PDComment_content">
      <ul class="PDComment_content_comment">
        <li
          class="PDComment_content_comment_item"
          v-for="item in 3"
          :key="item"
        >
          <div class="PDComment_content_comment_item_author">
            <img src="../../../assets/imgs/main/author.png" alt="" />
            <span class="PDComment_content_comment_item_name">
              精神病院里的精神病患者
            </span>
          </div>
          <div class="PDComment_content_comment_message">
            <div class="PDComment_content_comment_message_main">
              产品经理good! 产品经理good! 产品经理good! 产品经理good!
              产品经理good! 产品经理good! 产品经理good! 产品经理good!
              产品经理good! 产品经理good!
            </div>
            <div class="PDComment_content_comment_message_other">查看更多</div>
            <div>
              <span class="PDComment_content_comment_message_good">
                <img src="../../../assets/imgs/common/good.png" alt="点赞" />
                <span class="PDComment_content_comment_message_good_count"
                  >999</span
                >
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./PDComment.scss";

export default {
  setup() {
    return {};
  },
};
</script>
