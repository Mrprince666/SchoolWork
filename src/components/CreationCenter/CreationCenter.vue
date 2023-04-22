<template>
  <div class="CreationCenter">
    <div class="CreationCenter_header">
      <input
        type="text"
        placeholder="标题非必填"
        class="CreationCenter_header_title"
        v-model="comment.title"
        maxlength="20"
      />
      <span class="CreationCenter_header_tips"
        >{{ comment.title.length }}/20</span
      >
    </div>
    <div class="CreationCenter_content">
      <textarea
        class="CreationCenter_content_input"
        placeholder="好东西一起分享，好环境一起营造"
        v-model="comment.content"
      ></textarea>
    </div>
    <div class="CreationCenter_talk">
      <span class="CreationCenter_talk_label">话题(选填):</span>
      <el-select
        v-model="comment.moduleId"
        class="m-2"
        placeholder="请选择话题"
      >
        <el-option
          v-for="item in positionList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
    </div>
    <div class="CreationCenter_image">
      <span class="CreationCenter_talk_label">图片(最多一张):</span>
      <UploadImgs
        :limit="1"
        :imgUrls="imgUrls"
        :getBase64="getBase64"
        :delBase64="delBase64"
      />
    </div>
    <div class="CreationCenter_footer">
      <ul class="CreationCenter_footer_function"></ul>
      <div>
        <button
          class="CreationCenter_footer_commit"
          v-if="comment.id"
          @click="updateCommentItem"
        >
          确定修改
        </button>
        <button
          class="CreationCenter_footer_cancel"
          v-if="comment.id"
          @click="goback"
        >
          取消
        </button>
        <button
          class="CreationCenter_footer_commit"
          @click="handleCommit"
          v-else
        >
          发布
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "./CreationCenter.scss";
import { onMounted, reactive, toRefs, watch } from "vue";
import { ElMessage } from "element-plus";
import { addComment, getACommnet, updateComment } from "../../request/comment";
import { getAllPt } from "../../request/position";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import UploadImgs from "../../common/UploadImg/UploadImgs.vue";

export default {
  components: {
    UploadImgs,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const state = reactive({
      comment: {
        title: "",
        content: "",
        moduleId: null,
        companyId: null,
      },
      positionList: [],
      imgUrls: [],
      base64: "",
      pic: null,
    });

    onMounted(() => {
      getAllPosition();
    });

    const handleCommit = async () => {
      const userId = store.state.user.userInfo.id;
      if (!userId) {
        router.push("/login");
        ElMessage.warning("请先登录！");
        return;
      }
      if (state.comment.content.trim() === "") {
        ElMessage.error("请先评论");
        return;
      }
      const params = {
        ...state.comment,
        time: new Date().getTime(),
        userId,
        imgData: state.base64,
      };
      const { data: res } = await addComment(params);
      if (res.status === 0) {
        router.push("/commentSquare");
        ElMessage.success(res.message);
      } else {
        ElMessage.error(res.message);
      }
    };

    const getAllPosition = async () => {
      const { data: res } = await getAllPt();
      if (res.status === 0) {
        state.positionList = res.data;
      }
    };

    const getComment = async (id) => {
      const params = {
        id,
      };
      const { data: res } = await getACommnet(params);
      if (res.status === 0) {
        state.comment = res.data;
        state.pic = res.data.pic;
        state.imgUrls = [{ url: res.data.pic }];
      }
    };

    watch(
      () => route.query.id,
      (id) => {
        if (id) {
          getComment(id);
        }
      },
      { immediate: true }
    );

    const goback = () => {
      router.go(-1);
    };

    const getBase64 = (base64) => {
      state.base64 = base64;
    };

    const delBase64 = () => {
      state.pic = null;
    };

    const updateCommentItem = async () => {
      if (state.comment.content.trim() === "") {
        ElMessage.error("请先评论");
        return;
      }
      const params = {
        ...state.comment,
        pic: state.pic,
        imgData: state.base64,
      };
      const { data: res } = await updateComment(params);
      if (res.status === 0) {
        goback();
        ElMessage.success(res.message);
      } else {
        ElMessage.error(res.message);
      }
    };

    return {
      ...toRefs(state),
      handleCommit,
      goback,
      getBase64,
      delBase64,
      updateCommentItem,
    };
  },
};
</script>
