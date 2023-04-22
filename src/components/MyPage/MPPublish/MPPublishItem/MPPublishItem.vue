<template>
  <div class="MPPublishItem">
    <div class="MPPublishItem_avater">
      <MPAvater
        :time="comment.time"
        :userName="comment.userName"
        :pic="comment.pic"
        :name="comment.name"
      />
    </div>
    <div class="MPPublishItem_title">{{ comment.title }}</div>
    <div class="MPPublishItem_content">
      <span class="MPPublishItem_content_message">
        {{ comment.content }}
      </span>
    </div>
    <div class="MPPublishItem_image" v-if="comment?.image">
      <img :src="comment.image" alt="" class="MPPublishItem_image_img" />
    </div>
    <div
      class="MPPublishItem_content_more"
      @click="gotoTrendsDetails(comment.id)"
    >
      查看更多
    </div>
    <div class="MPPublishItem_footer">
      <span class="MPPublishItem_footer_good">
        <img src="../../../../assets/imgs/common/good.png" alt="点赞" />
        <span class="MPPublishItem_footer_good_count">{{ comment.like }}</span>
      </span>
      <div class="MPPublishItem_footer_right">
        <span @click="gotoCreationCenter(comment.id)">编辑</span>
        <span @click="deleteCommentItem(comment.id)">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
import "./MPPublishItem.scss";
import MPAvater from "../../MPAvater/MPAvater.vue";
import { useRouter } from "vue-router";

export default {
  props: ["comment", "deleteCommentItem"],

  components: {
    MPAvater,
  },

  setup() {
    const router = useRouter();

    const gotoTrendsDetails = (id) => {
      router.push({
        path: "/trendsDetails",
        query: {
          id,
        },
      });
    };

    const gotoCreationCenter = (id) => {
      router.push({
        path: "/creationCenter",
        query: {
          id,
        },
      });
    };
    return {
      gotoTrendsDetails,
      gotoCreationCenter,
    };
  },
};
</script>
