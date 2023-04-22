<template>
  <div class="PDFooter">
    <div class="PDFooter_hr">
      <img class="PDFooter_hr_avater" :src="hr.pic" alt="头像" />
      <div class="PDFooter_hr_content">
        <div class="PDFooter_hr_content_name">
          <span>{{ hr.realName }}</span>
          <span class="PDFooter_hr_content_name_chat" @click="gotoChatRoom">
            <img src="../../../assets/imgs/common/chat.png" alt="" />
          </span>
        </div>
        <span class="PDFooter_hr_content_po">{{ hr.name }}</span>
      </div>
    </div>
    <div class="PDFooter_address">
      <div class="PDFooter_title">工作地址</div>
      <ul class="PDFooter_address_ul">
        <li v-for="item in address" :key="item.id">
          <img src="../../../assets/imgs/common/adress.png" alt="" />
          <span>{{ item.fullAddress }}</span>
        </li>
      </ul>
    </div>
    <div class="PDFooter_company">
      <div class="PDFooter_title">公司介绍</div>
      <p class="PDFooter_company_content">
        {{ introduction }}
      </p>
    </div>
  </div>
</template>

<script>
import "./PDFooter.scss";
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";

export default {
  props: ["positionId", "introduction", "hr", "address"],
  setup(props) {
    const router = useRouter();
    const state = reactive({});

    const gotoChatRoom = () => {
      router.push({
        path: "/ChatRoom",
        query: {
          userId: props.hr.id,
        },
      });
    };

    return {
      ...toRefs(state),
      gotoChatRoom,
    };
  },
};
</script>
