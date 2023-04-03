<template>
  <div class="WorkItem">
    <div class="WorkItem_top">
      <span>{{ position.name }}</span>
      <span class="WorkItem_top_money"
        >{{ position.salaryLow }}-{{ position.salaryUp }}K·{{
          position.salaryNumber
        }}薪</span
      >
    </div>
    <ul class="WorkItem_tab">
      <li v-for="item in describe" :key="item.id">{{ item.content }}</li>
    </ul>
    <div class="WorkItem_bottom">
      <div class="WorkItem_bottom_name">
        <img src="../../../../assets/imgs/main/tengxu_logo.jpg" alt="" />
        <span>{{ position.shortName }}</span>
      </div>
      <div>{{ position.territory }}</div>
    </div>
  </div>
</template>

<script>
import "./WorkItem.scss";
import { onMounted, reactive, toRefs } from "vue";
import { getPositionHotDescribeList } from "../../../../request/position";

export default {
  props: ["position"],

  setup(props) {
    const state = reactive({
      positionId: props.position.id,
      describe: [],
    });

    onMounted(() => {
      getDescribeList();
    });
    const getDescribeList = async () => {
      const params = {
        positionId: state.positionId,
      };
      const { data: res } = await getPositionHotDescribeList(params);
      if (res.status === 0) {
        state.describe = res.data;
      }
    };

    return {
      ...toRefs(state),
    };
  },
};
</script>
