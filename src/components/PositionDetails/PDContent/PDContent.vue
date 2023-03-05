<template>
  <div class="PDContent">
    <div class="PDContent_describe">
      <div class="PDContent_title">职位描述</div>
      <ul class="PDContent_describe_ul">
        <li>策略产品</li>
        <li>市场调研</li>
        <li>产品运营</li>
        <li>数据分析</li>
      </ul>
    </div>
    <div class="PDContent_content">
      <div class="PDContent_title">职位职责</div>
      <p class="PDContent_content_describe">
        1、全面对接公司代理产品线相关事宜，制定和实施市场策略，包括产品策略、价格策略和库存管理等；
        <br />
        2、执行原厂策略，申请价格和拜访原厂，定期与原厂评估业绩和重点项目；
        <br />
        3、开发行业客户，通过提供样品、价格、技术、服务等支持提升公司销售量及利润空，与原厂沟通协调以获取支持；
        <br />
        4、协同销售部门一起拜访重要客户，提供原厂端的技术及资源支持；
      </p>
    </div>
    <div class="PDContent_content">
      <div class="PDContent_title">岗位职责</div>
      <p class="PDContent_content_describe">
        1、大专或以上学历，有电子元器件相关工作经验5年或以上；
        <br />
        2、熟悉电子元器件行业，善于理解把握市场趋势和客户需求，思维清晰，逻辑性强
        <br />
        3、具备产品的需求分析和规划能力，深入理解产品定位，并有充分的实践经历加分项
      </p>
      <p class="PDContent_content_up">
        有以下行业经验：电子/半导体/集成电路·原材料及加工/模具
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import "./PDContent.scss";

export default {
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>
