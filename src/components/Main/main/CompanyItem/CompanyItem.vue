<template>
  <div class="CompanyItem">
    <div class="CompanyItem_header">
      <CompanyHeader :companyInfo="companyInfo" />
    </div>
    <div class="CompanyItem_post">
      <ul class="CompanyItem_post_ul">
        <li
          class="CompanyItem_post_li"
          v-for="item in positionInfo"
          :key="item.id"
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

export default {
  components: {
    CompanyHeader,
    CompanyPost,
  },
  props: ["companyId"],

  setup(props) {
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
        console.log(888, state);
      }
      console.log(888, res);
    };

    return {
      ...toRefs(state),
    };
  },
};
</script>
