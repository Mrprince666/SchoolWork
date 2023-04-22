<template>
  <div class="CompanyHeader">
    <img :src="companyInfo.pic" alt="企业logo" />
    <div class="CompanyHeader_right">
      <div class="CompanyHeader_right_name">{{ companyInfo.shortName }}</div>
      <ul class="CompanyHeader_right_tab">
        <li v-if="companyInfo.finance">{{ companyInfo.finance }}</li>
        <li v-if="companyInfo.employeeNum">{{ companyInfo.employeeNum }}</li>
        <li v-if="companyInfo.territory">{{ companyInfo.territory }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CompanyHeader.scss";

export default {
  props: ["companyInfo"],

  setup() {
    return {};
  },
};
</script>
