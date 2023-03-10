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
          <li
            :class="{ CompanyDetails_Nav_active: tab === 0 }"
            @click="changeTab(0)"
          >
            公司简介
          </li>
          <li
            :class="{ CompanyDetails_Nav_active: tab === 1 }"
            @click="changeTab(1)"
          >
            招聘职位(150)
          </li>
          <li
            :class="{ CompanyDetails_Nav_active: tab === 2 }"
            @click="changeTab(2)"
          >
            公司评论
          </li>
        </ul>
        <div class="CompanyDetails_content">
          <div v-show="tab === 0">
            <CompanyIntro />
          </div>
          <div v-show="tab === 1">
            <CompanyPagePosition />
          </div>
          <div v-show="tab === 2">
            <CompanyPageComment />
          </div>
        </div>
      </div>
      <div class="CompanyDetails_container_right">
        <div class="CompanyDetails_welfare">
          <CPWelfare />
        </div>
        <div class="CompanyDetails_hr">
          <CPHr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./CompanyDetails.scss";
import { reactive, toRefs } from "vue";
import CompanyIntro from "./CompanyIntro/CompanyIntro.vue";
import CompanyPageComment from "./CompanyPageComment/CompanyPageComment.vue";
import CompanyPagePosition from "./CompanyPagePosition/CompanyPagePosition.vue";
import CPWelfare from "./CPWelfare/CPWelfare.vue";
import CPHr from "./CPHr/CPHr.vue";

export default {
  components: {
    CompanyIntro,
    CompanyPageComment,
    CompanyPagePosition,
    CPWelfare,
    CPHr,
  },

  setup() {
    const state = reactive({
      tab: 0,
    });

    const changeTab = (tab) => {
      state.tab = tab;
    };

    return {
      ...toRefs(state),
      changeTab,
    };
  },
};
</script>
