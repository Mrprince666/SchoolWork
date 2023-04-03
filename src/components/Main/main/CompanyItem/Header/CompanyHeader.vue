<template>
  <div class="CompanyHeader">
    <img src="../../../../../assets/imgs/main/tengxu_logo.jpg" alt="企业logo" />
    <div class="CompanyHeader_right">
      <div class="CompanyHeader_right_name">{{ companyInfo.shortName }}</div>
      <ul class="CompanyHeader_right_tab">
        <li>{{ companyInfo.finance }}</li>
        <li>{{ companyInfo.employeeNum }}</li>
        <li>{{ companyInfo.territory }}</li>
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
