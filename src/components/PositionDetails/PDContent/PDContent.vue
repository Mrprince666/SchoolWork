<template>
  <div class="PDContent">
    <div class="PDContent_describe">
      <div class="PDContent_title">职位描述</div>
      <ul class="PDContent_describe_ul">
        <li v-for="item in describeList" :key="item.id">
          <span v-if="item.content">{{ item.content }}</span>
        </li>
      </ul>
    </div>
    <div class="PDContent_content">
      <div class="PDContent_title">职位职责</div>
      <p class="PDContent_content_describe">
        {{ describe }}
      </p>
    </div>
    <div class="PDContent_content">
      <div class="PDContent_title">岗位职责</div>
      <p class="PDContent_content_describe">
        {{ require }}
      </p>
      <p class="PDContent_content_up">
        {{ experience }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import "./PDContent.scss";

export default {
  props: ["describeList", "describe", "require", "experience"],

  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>
