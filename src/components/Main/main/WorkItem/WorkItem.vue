<template>
  <div class="WorkItem">
    <div class="WorkItem_top">
      <span>{{ position.name }}</span>
      <span class="WorkItem_top_money" v-if="position.salaryType === 0">
        {{ position.salaryLow }}-{{ position.salaryUp }}K·{{
          position.salaryNumber
        }}薪
      </span>
      <span class="WorkItem_top_money" v-if="position.salaryType === 1">
        {{ position.salaryLow }}百/天
      </span>
      <span class="WorkItem_top_money" v-if="position.salaryType === 2">
        {{ position.salaryLow }}元/小时
      </span>
    </div>
    <ul class="WorkItem_tab">
      <li v-for="item in describe" :key="item.id">
        <span v-if="item.content">{{ item.content }}</span>
      </li>
    </ul>
    <div class="WorkItem_bottom">
      <div class="WorkItem_bottom_name">
        <img :src="position.pic" alt="" />
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
