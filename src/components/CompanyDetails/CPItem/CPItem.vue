<template>
  <div class="CPIitem">
    <div class="CPIitem_left">
      <div class="CPIitem_left_content">
        <span class="CPIitem_left_content_name">{{ position.name }}</span>
        <span
          class="CPIitem_left_content_money"
          v-if="position.salaryType === 0"
        >
          {{ position.salaryLow }}K-{{ position.salaryUp }}K
        </span>
        <span
          class="CPIitem_left_content_money"
          v-if="position.salaryType === 1"
        >
          {{ position.salaryLow }}百/天
        </span>
        <span
          class="CPIitem_left_content_money"
          v-if="position.salaryType === 2"
        >
          {{ position.salaryLow }}元/小时
        </span>
      </div>
      <ul class="CPIitem_left_key">
        <li v-for="item in desList" :key="item.id">
          <span v-if="item.content" class="CPIitem_left_key_content">
            {{ item.content }}
          </span>
        </li>
      </ul>
    </div>
    <div class="CPIitem_right">
      <img :src="position.pic" alt="" />
      <div class="CPIitem_right_content">
        <span>{{ position.userName }}</span>
        <span class="CPIitem_right_content_pname">{{ position.pName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import "./CPIitem.scss";
import { getPositionHotDescribeList } from "../../../request/position";
import { reactive, toRefs, onMounted } from "vue";

export default {
  props: ["position"],

  setup(props) {
    const state = reactive({
      desList: [],
    });

    onMounted(() => {
      getDes();
    });

    const getDes = async () => {
      const params = {
        positionId: props.position.id,
      };
      const { data: res } = await getPositionHotDescribeList(params);
      if (res.status === 0) {
        state.desList = res.data;
      }
    };
    return {
      ...toRefs(state),
    };
  },
};
</script>
