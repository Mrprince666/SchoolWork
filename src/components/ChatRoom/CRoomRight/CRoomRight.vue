<template>
  <div class="CRoomRight">
    <div class="CRoomRight_header">
      <div class="CRoomRight_hr">
        <div class="CRoomRight_hr_left">
          <span>江先生</span>
          <span>腾讯科技有限公司</span>
          <span>经理</span>
        </div>
        <div class="CRoomRight_hr_right">
          <button class="CRoomRight_hr_right_first">置顶</button>
        </div>
      </div>
      <div class="CRoomRight_positoin">
        <span class="CRoomRight_positoin_name">产品经理PM</span>
        <span class="CRoomRight_positoin_money">13-20K</span>
        <span class="CRoomRight_positoin_city">深圳</span>
      </div>
    </div>
    <div class="CRoomRight_chat">
      <ul class="CRoomRight_chat_list">
        <li class="CRoomRight_chat_item" v-for="item in 4" :key="item">
          <span class="CRoomRight_chat_item_message CRoomRight_chat_item_my"
            >您好，能和您沟通一下吗？我对这个岗位很有兴趣。</span
          >
        </li>
        <li class="CRoomRight_chat_item" v-for="item in 4" :key="item">
          <span class="CRoomRight_chat_item_message CRoomRight_chat_item_hr"
            >您好，能和您沟通一下吗？我对这个岗位很有兴趣。</span
          >
        </li>
      </ul>
    </div>
    <div class="CRoomRight_footer">
      <div class="CRoomRight_footer_input">
        <textarea placeholder="快来沟通一下吧！"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import "./CRoomRight.scss";

export default {
  setup() {
    return {};
  },
};
</script>
