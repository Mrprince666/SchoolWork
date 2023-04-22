<template>
  <div class="CompanyIntro">
    <div class="CompanyIntro_title">公司简介</div>
    <p class="CompanyIntro_introduction">
      {{ details.introduction }}
    </p>
    <div class="CompanyIntro_title">工商信息</div>
    <div class="CompanyIntro_details">
      <ul class="CompanyIntro_details_ul">
        <li>
          <span>企业名称:</span>
          <span>{{ details.fullName }}</span>
        </li>
        <li>
          <span>法定代表人:</span>
          <span>{{ details.boss }}</span>
        </li>
        <li>
          <span>成立时间:</span>
          <span>{{ details.startTime }}</span>
        </li>
        <li>
          <span>企业类型:</span>
          <span>{{ details.type }}</span>
        </li>
        <li>
          <span>经营状态:</span>
          <span>{{ details.businessStatus }}</span>
        </li>
        <li>
          <span>注册资本:</span>
          <span>{{ details.startMoney }}</span>
        </li>
      </ul>
      <ul class="CompanyIntro_details_ul_col">
        <li>
          <span>注册地址:</span>
          <span>{{ details.startAddress }}</span>
        </li>
        <li>
          <span>统一社会信用代码:</span>
          <span>{{ details.societyNumber }}</span>
        </li>
        <li>
          <span>经营范围:</span>
          <span>{{ details.scope }}</span>
        </li>
      </ul>
    </div>
    <div class="CompanyIntro_title">公司地址</div>
    <div class="CompanyIntro_address">
      <ul class="CompanyIntro_address_ul">
        <li v-for="item in details.address" :key="item.id">
          <img src="../../../assets/imgs/common/adress.png" alt="" />
          <span>{{ item.fullAddress }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CompanyIntro.scss";

export default {
  props: ["details"],

  setup() {
    return {};
  },
};
</script>
