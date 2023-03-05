<template>
  <div class="CompanyDetails">
    <div class="CompanyDetails_header">
      <div class="CompanyDetails_header_left">
        <img src="../../assets/imgs//main/tengxu_logo.jpg" alt="" />
        <div class="CompanyDetails_header_company">
          <div class="CompanyDetails_header_company_name">腾讯</div>
          <ul class="CompanyDetails_header_company_ul">
            <li>互联网</li>
            <li>10000人以上</li>
            <li>不需要融资</li>
            <li>深圳</li>
          </ul>
        </div>
      </div>
      <div class="CompanyDetails_header_right">
        <div class="CompanyDetails_header_position">
          <span>4236</span> 在招职位
        </div>
        <div class="CompanyDetails_header_button">
          <button class="CompanyDetails_header_button_entry">查看官网</button>
          <button class="CompanyDetails_header_button_upload">上传简历</button>
        </div>
      </div>
    </div>
    <div class="CompanyDetails_container">
      <div class="CompanyDetails_container_left">
        <ul class="CompanyDetails_Nav">
          <li :class="tab === 0 && 'CompanyDetails_Nav_active'">公司简介</li>
          <li>招聘职位</li>
          <li>公司评论</li>
        </ul>
        <div class="CompanyDetails_content"></div>
      </div>
      <div class="CompanyDetails_container_right"></div>
    </div>
  </div>
</template>

<script>
import "./CompanyDetails.scss";
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      tab: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
