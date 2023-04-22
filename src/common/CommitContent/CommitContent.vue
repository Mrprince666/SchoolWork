<template>
  <div class="CommitContent">
    <div class="CommitContent_title">{{ title }}</div>
    <div class="CommitContent_content" @click="gotoDetails">{{ content }}</div>
    <div class="CommitContent_image" v-if="image">
      <img class="CommitContent_image_img" :src="image" alt="" />
    </div>
    <div class="CommitContent_module">
      <span v-if="pName">#{{ pName }}#</span>
      <span v-if="shortName">#{{ shortName }}#</span>
    </div>
    <div class="CommitContent_footer">
      <span class="CommitContent_footer_good" @click="changeCommentGood">
        <img
          src="../../assets/imgs/common/good.png"
          alt="点赞"
          v-if="!isGood"
        />
        <img src="../../assets/imgs/common/good_active.png" alt="点赞" v-else />
        <span
          :class="{
            CommitContent_footer_good_count: true,
            CommitContent_active: isGood,
          }"
          >{{ likeCount }}</span
        >
      </span>
      <span class="CommitContent_footer_good" @click="changeCommentCollect">
        <img
          src="../../assets/imgs/common/collent-grey.png"
          alt="收藏"
          v-if="!isCollect"
        />
        <img
          src="../../assets/imgs/common/collect-active.png"
          alt="收藏"
          v-else
        />
        <span
          :class="{
            CommitContent_footer_good_count: true,
            CommitContent_active: isCollect,
          }"
          >收藏</span
        >
      </span>
      <span class="CommitContent_footer_good" @click="gotoDetails">
        <img src="../../assets/imgs/common/chat-grey.png" alt="评论" />
        <span class="CommitContent_footer_good_count">评论</span>
      </span>
    </div>
  </div>
</template>

<script>
import "./CommitContent.scss";
import { reactive, toRefs, watch } from "vue";
import { useStore } from "vuex";
import {
  getGood,
  addGood,
  deleteGood,
  getCollect,
  addCollect,
  deleteCollect,
} from "../../request/comment.js";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

export default {
  props: [
    "title",
    "content",
    "like",
    "commentId",
    "pName",
    "shortName",
    "image",
  ],
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      isGood: false,
      isCollect: false,
      likeCount: 5,
      userId: store.state.user.userInfo.id,
      commentId: 0,
    });

    watch(
      () => props.like,
      (val) => {
        state.likeCount = val;
      },
      { immediate: true }
    );

    // 点赞
    const getCommentGood = async () => {
      const params = {
        userId: state.userId,
        commentId: state.commentId,
      };
      const { data: res } = await getGood(params);
      if (res.status === 0) {
        state.isGood = !!res.data;
      }
    };

    const addCommentGood = async () => {
      const params = {
        userId: state.userId,
        commentId: state.commentId,
      };
      const { data: res } = await addGood(params);
      if (res.status === 0) {
        state.isGood = true;
        state.likeCount += 1;
      } else {
        ElMessage.error("点赞失败");
      }
    };

    const deleteCommentGood = async () => {
      const params = {
        userId: state.userId,
        commentId: state.commentId,
      };
      const { data: res } = await deleteGood(params);
      if (res.status === 0) {
        state.isGood = false;
        state.likeCount -= 1;
      } else {
        ElMessage.error("取消失败");
      }
    };

    const changeCommentGood = () => {
      if (!state.userId) {
        router.push("/login");
        return ElMessage.warning("请先登录");
      }
      if (state.isGood) {
        deleteCommentGood();
      } else {
        addCommentGood();
      }
    };

    // 收藏
    const getCommentCollect = async () => {
      const params = {
        userId: state.userId,
        commentId: state.commentId,
      };
      const { data: res } = await getCollect(params);
      if (res.status === 0) {
        state.isCollect = !!res.data;
      }
    };

    const addCommentCollect = async () => {
      const params = {
        userId: state.userId,
        commentId: state.commentId,
      };
      const { data: res } = await addCollect(params);
      if (res.status === 0) {
        state.isCollect = true;
        ElMessage.success("收藏成功");
      } else {
        ElMessage.error("点赞失败");
      }
    };

    const deleteCommentCollect = async () => {
      const params = {
        userId: state.userId,
        commentId: state.commentId,
      };
      const { data: res } = await deleteCollect(params);
      if (res.status === 0) {
        state.isCollect = false;
        ElMessage.success("取消成功");
      } else {
        ElMessage.error("取消失败");
      }
    };

    const changeCommentCollect = () => {
      if (!state.userId) {
        router.push("/login");
        return ElMessage.warning("请先登录");
      }
      if (state.isCollect) {
        deleteCommentCollect();
      } else {
        addCommentCollect();
      }
    };

    watch(
      () => props.commentId,
      (val) => {
        state.commentId = val;
        if (val) {
          getCommentGood();
          getCommentCollect();
        }
      },
      { immediate: true }
    );

    const gotoDetails = () => {
      router.push({
        path: "/trendsDetails",
        query: {
          id: state.commentId,
        },
      });
    };

    return {
      ...toRefs(state),
      changeCommentGood,
      changeCommentCollect,
      gotoDetails,
    };
  },
};
</script>
