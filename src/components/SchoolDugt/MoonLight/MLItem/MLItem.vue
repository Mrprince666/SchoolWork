<template>
  <div class="MLItem">
    <div class="MLItem_header">
      <span class="MLItem_header_name">{{ position.name }}</span>
      <span class="MLItem_header_money" v-if="position.salaryType === 0">
        {{ position.salaryLow }} - {{ position.salaryUp }}K
      </span>
      <span class="MLItem_header_money" v-if="position.salaryType === 1">
        {{ position.salaryUp }}百/天
      </span>
      <span class="MLItem_header_money" v-if="position.salaryType === 2">
        {{ position.salaryUp }}元/小时
      </span>
    </div>
    <ul class="MLItem_des">
      <li class="MLItem_des_item" v-for="item in des.message" :key="item.id">
        <span v-if="item.content">{{ item.content }}</span>
      </li>
    </ul>
    <ul class="MLItem_request">
      <li class="MLItem_request_item">
        <img
          class="MLItem_request_item_img"
          src="../../../../assets/imgs/common/address-666.png"
        />
        <span class="MLItem_request_item_name">{{
          des.describe?.[0]?.content || ""
        }}</span>
      </li>
      <li class="MLItem_request_item">
        <img
          src="../../../../assets/imgs/common/time-666.png"
          class="MLItem_request_item_img"
        />
        <span>{{ des.describe?.[1]?.content || "" }}</span>
      </li>
      <li class="MLItem_request_item">
        <img
          src="../../../../assets/imgs/common/notebook-666.png"
          class="MLItem_request_item_img"
        />
        <span>{{ des.describe?.[2]?.content || "" }}</span>
      </li>
    </ul>
    <div class="MLItem_footer">
      <img class="MLItem_footer_img" :src="position.pic" />
      <span class="MLItem_footer_name">{{ position.fullName }}</span>
    </div>
  </div>
</template>

<script>
import "./MLItem.scss";
import { selectPositionDes } from "../../../../request/position";
import { reactive, toRefs, watch } from "vue";

export default {
  props: ["position"],

  setup(props) {
    const state = reactive({
      des: {},
      id: "",
    });

    const getList = async () => {
      const params = {
        id: state.id,
      };
      const { data: res } = await selectPositionDes(params);
      if (res.status === 0) {
        state.des = res.data;
      }
    };

    watch(
      () => props.position,
      (val) => {
        state.id = val.id;
        if (val) {
          getList();
        }
      },
      { immediate: true }
    );

    return {
      ...toRefs(state),
    };
  },
};
</script>
