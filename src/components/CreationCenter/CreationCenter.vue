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
    <div class="CreationCenter_image">
      <ul class="CreationCenter_image_list">
        <li class="CreationCenter_image_list_item"></li>
      </ul>
    </div>
    <div class="CreationCenter_footer">
      <ul class="CreationCenter_footer_function">
        <li class="CreationCenter_footer_function_item">
          <img src="../../assets/imgs/common/picture.png" alt="" />
          <span>图片</span>
        </li>
      </ul>
      <button class="CreationCenter_footer_commit">发布</button>
    </div>
  </div>
</template>

<script>
import "./CreationCenter.scss";
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      comment: {
        title: "",
        content: "",
      },
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
