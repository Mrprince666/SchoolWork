<template>
  <div class="PositionDetails">
    <div class="PositionDetails_main">
      <PDHeader
        :name="details.name"
        :salaryLow="details.salaryLow"
        :salaryUp="details.salaryUp"
        :salaryNumber="details.salaryNumber"
        :message="message"
        :positionId="details.id"
        :salaryType="details.salaryType"
      />
      <PDContent
        :describeList="describe"
        :describe="details.p_describe"
        :require="details.p_require"
        :experience="details.experience"
      />
      <PDFooter
        :positionId="details.id"
        :introduction="details.introduction"
        :hr="hr"
        :address="address"
      />
    </div>
    <div class="PositionDetails_right">
      <PDCompany
        :companyId="details.companyId"
        :finance="details.finance"
        :employeeNum="details.employeeNum"
        :territory="details.territory"
        :pic="details.pic"
        :shortName="details.shortName"
      />
      <PDComment :comment="comment" />
    </div>
  </div>
</template>

<script>
import "./PositionDetails.scss";
import PDHeader from "./PDHeader/PDHeader.vue";
import PDContent from "./PDContent/PDContent.vue";
import PDFooter from "./PDFooter/PDFooter.vue";
import PDCompany from "./PDCompany/PDCompany.vue";
import PDComment from "./PDComment/PDComment.vue";
import {
  getDetails,
  selectPositionDes,
  getAHrMessage,
  getAddress,
  getPositionComment,
} from "../../request/position";
import { reactive, toRefs, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    PDHeader,
    PDContent,
    PDFooter,
    PDCompany,
    PDComment,
  },

  setup() {
    const route = useRoute();
    const state = reactive({
      details: {},
      describe: [],
      message: [],
      treatment: [],
      hr: {},
      address: [],
      comment: [],
    });

    onMounted(() => {
      getPositionDetails();
    });

    const getPositionDetails = async () => {
      const params = {
        positionId: route.query.positionId,
      };
      const { data: res } = await getDetails(params);
      if (res.status === 0) {
        state.details = res.data;
        getDes(res.data.id, res.data.companyId);
        getAHr(res.data.userId);
        getAddressList(res.data.id);
        getPositionCommentList(res.data.tradeId);
      }
    };

    const getDes = async (id, companyId) => {
      const params = {
        id,
        companyId,
      };
      const { data: res } = await selectPositionDes(params);
      if (res.status === 0) {
        state.describe = res.data.describe;
        state.message = res.data.message;
        state.treatment = res.data.treatment;
      }
    };

    const getAHr = async (userId) => {
      const parmas = {
        userId,
      };
      const { data: res } = await getAHrMessage(parmas);
      if (res.status === 0) {
        state.hr = res.data;
      }
    };

    const getAddressList = async (positionId) => {
      const parmas = {
        positionId,
      };
      const { data: res } = await getAddress(parmas);
      if (res.status === 0) {
        state.address = res.data;
      }
    };

    const getPositionCommentList = async (moduleId) => {
      const parmas = {
        moduleId,
      };
      const { data: res } = await getPositionComment(parmas);
      if (res.status === 0) {
        state.comment = res.data;
      }
    };

    return {
      ...toRefs(state),
    };
  },
};
</script>
