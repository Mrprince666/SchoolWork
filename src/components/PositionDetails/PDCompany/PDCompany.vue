<template>
  <div class="PDCompany">
    <div class="PDCompany_header">公司基本信息</div>
    <div class="PDCompany_content">
      <img src="../../../assets/imgs/main/tengxu_logo.jpg" alt="" />
      <span>腾讯</span>
    </div>
    <ul class="PDCompany_messge">
      <li>
        <img src="../../../assets/imgs/common/finance.png" alt="" />
        <span>不需要融资</span>
      </li>
      <li>
        <img src="../../../assets/imgs/common/person.png" alt="" />
        <span>10000人以上</span>
      </li>
      <li>
        <img src="../../../assets/imgs/common/trade.png" alt="" />
        <span>互联网</span>
      </li>
    </ul>
    <div class="PDCompany_bottom">
      <button @click="gotoCompanyDetail">查看全部职位</button>
    </div>
  </div>
</template>

<script>
import "./PDCompany.scss";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const gotoCompanyDetail = () => {
      router.push({
        name: "CompanyDetails",
      });
    };
    return {
      gotoCompanyDetail,
    };
  },
};
</script>
