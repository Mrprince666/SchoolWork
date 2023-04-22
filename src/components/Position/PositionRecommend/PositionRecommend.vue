<template>
  <div class="PositionRecommend">
    <div class="PositionRecommend_top">
      <div class="PositionRecommend_messge">
        <span class="PositionRecommend_messge_name">{{ position.name }}</span>
        <span
          class="PositionRecommend_messge_money"
          v-if="position.salaryType === 0"
        >
          {{ position.salaryLow }}-{{ position.salaryUp }}K
        </span>
        <span
          class="PositionRecommend_messge_money"
          v-if="position.salaryType === 1"
        >
          {{ position.salaryLow }}百/天
        </span>
        <span
          class="PositionRecommend_messge_money"
          v-if="position.salaryType === 2"
        >
          {{ position.salaryLow }}元/小时
        </span>
      </div>
      <ul class="PositionRecommend_tab">
        <li v-for="item in des" :key="item.id">{{ item.content }}</li>
      </ul>
    </div>
    <div class="PositionRecommend_bottom">
      <div class="PositionRecommend_bottom_left">
        <img
          class="PositionRecommend_bottom_left_img"
          :src="position.pic"
          alt="企业Logo"
        />
        <span class="PositionRecommend_bottom_left_name">{{
          position.shortName
        }}</span>
      </div>
      <div class="PositionRecommend_bottom_right">{{ position.territory }}</div>
    </div>
  </div>
</template>

<script>
import "./PositionRecommend.scss";
import { reactive, toRefs, onMounted } from "vue";
import { getPositionHotDescribeList } from "../../../request/position";
// import { useStore } from "vuex";

export default {
  props: ["position"],

  setup(props) {
    // const store = useStore();

    const state = reactive({
      des: [],
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
        state.des = res.data;
      }
    };

    return {
      ...toRefs(state),
    };
  },
};
</script>
