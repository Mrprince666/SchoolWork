<template>
  <div class="PDCompany">
    <div class="PDCompany_header">公司基本信息</div>
    <div class="PDCompany_content">
      <img :src="pic" alt="" />
      <span>{{ shortName }}</span>
    </div>
    <ul class="PDCompany_messge">
      <li>
        <img src="../../../assets/imgs/common/finance.png" alt="" />
        <span>{{ finance }}</span>
      </li>
      <li>
        <img src="../../../assets/imgs/common/person.png" alt="" />
        <span>{{ employeeNum }}</span>
      </li>
      <li>
        <img src="../../../assets/imgs/common/trade.png" alt="" />
        <span>{{ territory }}</span>
      </li>
    </ul>
    <div class="PDCompany_bottom">
      <button @click="gotoCompanyDetail(companyId)">查看全部职位</button>
    </div>
  </div>
</template>

<script>
import "./PDCompany.scss";
import { useRouter } from "vue-router";

export default {
  props: [
    "companyId",
    "finance",
    "employeeNum",
    "territory",
    "pic",
    "shortName",
  ],

  setup() {
    const router = useRouter();

    const gotoCompanyDetail = (companyId) => {
      router.push({
        name: "CompanyDetails",
        query: {
          companyId,
        },
      });
    };
    return {
      gotoCompanyDetail,
    };
  },
};
</script>
