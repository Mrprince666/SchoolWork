<template>
  <div class="PositionItem">
    <div class="PositionItem_top">
      <div class="PositionItem_message">
        <div class="PositionItem_message_name">{{ position.name }}</div>
        <div class="PositionItem_message_select">
          <span
            class="PositionItem_message_select_money"
            v-if="position.salaryType === 0"
          >
            {{ position.salaryLow }}-{{ position.salaryUp }}K
          </span>
          <span
            class="PositionItem_message_select_money"
            v-if="position.salaryType === 1"
          >
            {{ position.salaryLow }}百/天
          </span>
          <span
            class="PositionItem_message_select_money"
            v-if="position.salaryType === 2"
          >
            {{ position.salaryLow }}元/小时
          </span>
          <ul class="PositionItem_message_select_ul">
            <li v-for="item in message" :key="item.id">
              <span v-if="item.content">{{ item.content }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="PositionItem_company">
        <img
          :src="position.pic"
          alt="compaylLogo"
          class="PositionItem_company_logo"
        />
        <div class="PositionItem_company_right">
          <div class="PositionItem_company_name">{{ position.shortName }}</div>
          <ul class="PositionItem_company_describe">
            <li>{{ position.territory }}</li>
            <li>{{ position.finance }}</li>
            <li>{{ position.employeeNum }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="PositionItem_bottom">
      <ul class="PositionItem_bottom_field">
        <li v-for="item in describe" :key="item.id">
          <span v-if="item.content">{{ item.content }}</span>
        </li>
      </ul>
      <span class="PositionItem_bottom_welfare">
        {{ treatment }}
      </span>
    </div>
  </div>
</template>

<script>
import "./PositionItem.scss";
import { onMounted, reactive, toRefs } from "vue";
import { selectPositionDes } from "../../../request/position";

export default {
  props: ["position"],

  setup(props) {
    const state = reactive({
      describe: [],
      message: [],
      treatment: "",
    });

    onMounted(() => {
      getDes();
    });

    const getDes = async () => {
      const parmas = {
        id: props.position.id,
        companyId: props.position.companyId,
      };
      const { data: res } = await selectPositionDes(parmas);
      if (res.status === 0) {
        state.describe = res.data.describe;
        state.message = res.data.message;
        state.treatment = res.data.treatment
          .map((item) => {
            return item.content;
          })
          .join("，");
      }
    };
    return {
      ...toRefs(state),
    };
  },
};
</script>
