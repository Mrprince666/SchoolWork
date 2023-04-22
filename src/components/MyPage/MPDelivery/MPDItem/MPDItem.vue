<template>
  <div class="MPDItem">
    <div class="MPDItem_position">{{ position.name }}</div>
    <div class="MPDItem_details">
      <span class="MPDItem_details_money" v-if="position.salaryType === 0"
        >{{ position.salaryLow }}K-{{ position.salaryUp }}K</span
      >
      <span class="MPDItem_details_money" v-if="position.salaryType === 1"
        >{{ position.salaryLow }}百/天</span
      >
      <span class="MPDItem_details_money" v-if="position.salaryType === 2"
        >{{ position.salaryLow }}元/小时</span
      >
      <span class="MPDItem_details_company">{{ position.shortName }}</span>
      <ul class="MPDItem_details_list">
        <li v-for="item in desList" :key="item.id">{{ item.content }}</li>
      </ul>
    </div>
    <div class="MPDItem_footer">
      <div class="MPDItem_footer_hr">
        <img :src="position.pic" alt="" />
        <span>{{ position.userName }} * {{ position.pName }}</span>
      </div>
      <div class="MPDItem_footer_time">
        {{ standardAllTime(+position.time) }}
      </div>
    </div>
  </div>
</template>

<script>
import "./MPDItem.scss";
import { standardAllTime } from "../../../../assets/js/standardTime";
import { reactive, toRefs, watch } from "vue";
import { getPositionHotDescribeList } from "../../../../request/position";

export default {
  props: ["position"],

  setup(props) {
    const state = reactive({
      id: 0,
      list: [],
      desList: [],
    });

    const getList = async () => {
      const params = {
        positionId: state.id,
      };
      const { data: res } = await getPositionHotDescribeList(params);
      if (res.status === 0) {
        state.desList = res.data;
      }
    };

    watch(
      () => props.position,
      (val) => {
        state.id = val.id;
        getList();
      },
      { immediate: true }
    );

    return {
      ...toRefs(state),
      standardAllTime,
    };
  },
};
</script>
