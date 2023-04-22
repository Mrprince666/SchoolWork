<template>
  <div class="PDComment">
    <div class="PDComment_header">职位评论</div>
    <div class="PDComment_content">
      <ul class="PDComment_content_comment">
        <li
          class="PDComment_content_comment_item"
          v-for="item in comment"
          :key="item.id"
          @click="gotoDetail(item.id)"
        >
          <div class="PDComment_content_comment_item_author">
            <img
              :src="item.userPic"
              alt=""
              class="PDComment_content_comment_item_author_img"
            />
            <span class="PDComment_content_comment_item_name">
              {{ item.userName }}
            </span>
          </div>
          <div class="PDComment_content_comment_message">
            <div
              class="PDComment_content_comment_message_title"
              v-if="item.title"
            >
              {{ item.title }}
            </div>
            <div class="PDComment_content_comment_message_main">
              {{ item.content }}
            </div>
            <div
              class="PDComment_content_comment_message_image"
              v-if="item.image"
            >
              <img
                :src="item.image"
                class="PDComment_content_comment_message_image_img"
              />
            </div>
            <div class="PDComment_content_comment_message_other">查看更多</div>
          </div>
        </li>
      </ul>
      <div class="PDComment_content_nothing" v-if="comment.length === 0">
        暂无相关评论！
      </div>
    </div>
  </div>
</template>

<script>
import "./PDComment.scss";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  props: ["comment"],

  setup(props) {
    const router = useRouter();

    const state = reactive({
      like: props.comment.like,
    });

    const gotoDetail = (id) => {
      router.push({
        path: "/trendsDetails",
        query: {
          id,
        },
      });
    };
    return {
      ...toRefs(state),
      gotoDetail,
    };
  },
};
</script>
