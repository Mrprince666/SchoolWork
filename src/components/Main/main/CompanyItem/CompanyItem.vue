<template>
  <div class="CompanyItem">
    <div class="CompanyItem_header" @click="gotoCompanyDetails(companyId)">
      <CompanyHeader :companyInfo="companyInfo" />
    </div>
    <div class="CompanyItem_post">
      <ul class="CompanyItem_post_ul">
        <li
          class="CompanyItem_post_li"
          v-for="item in positionInfo"
          :key="item.id"
          @click="gotoPositionDetails(item.id)"
        >
          <CompanyPost :positionInfo="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CompanyItem.scss";
import CompanyPost from "./Post/CompanyPost.vue";
import CompanyHeader from "./Header/CompanyHeader.vue";
import { getHotCompany } from "../../../../request/company";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    CompanyHeader,
    CompanyPost,
  },
  props: ["companyId"],

  setup(props) {
    const router = useRouter();
    const state = reactive({
      companyInfo: {},
      positionInfo: [],
    });

    onMounted(() => {
      getCompanyInfo();
    });

    const getCompanyInfo = async () => {
      const params = {
        companyId: props.companyId,
      };
      const { data: res } = await getHotCompany(params);
      if (res.status === 0) {
        state.companyInfo = res.data.companyInfo;
        state.positionInfo = res.data.positionInfo;
      }
    };

    const gotoCompanyDetails = (companyId) => {
      router.push({
        path: "/CompanyDetails",
        query: {
          companyId,
        },
      });
    };

    const gotoPositionDetails = (positionId) => {
      router.push({
        path: "/positionDetails",
        query: {
          positionId,
        },
      });
    };

    return {
      ...toRefs(state),
      gotoCompanyDetails,
      gotoPositionDetails,
    };
  },
};
</script>
