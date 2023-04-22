<template>
  <div class="CompanyDetails">
    <div class="CompanyDetails_header">
      <div class="CompanyDetails_header_left">
        <img :src="details.pic" alt="" />
        <div class="CompanyDetails_header_company">
          <div class="CompanyDetails_header_company_name">
            {{ details.shortName }}
          </div>
          <ul class="CompanyDetails_header_company_ul">
            <li>{{ details.territory }}</li>
            <li>{{ details.employeeNum }}</li>
            <li>{{ details.finance }}</li>
          </ul>
        </div>
      </div>
      <div class="CompanyDetails_header_right">
        <div class="CompanyDetails_header_position">
          <span>{{ details.total }}</span> 在招职位
        </div>
        <div class="CompanyDetails_header_button">
          <button class="CompanyDetails_header_button_entry">
            <a :href="details.website" target="_blank">查看官网</a>
          </button>
          <button
            class="CompanyDetails_header_button_upload"
            @click="gotoMypage"
          >
            上传简历
          </button>
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
            招聘职位({{ details.total }})
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
            <CompanyIntro :details="details" />
          </div>
          <div v-show="tab === 1">
            <CompanyPagePosition
              :allCity="details.allCity"
              :allPosition="details.allPosition"
              :allSalary="details.allSalary"
              :positionList="positionList"
              :companyId="companyId"
              :total="total"
            />
          </div>
          <div v-show="tab === 2">
            <CompanyPageComment :comment="details.commentList" />
          </div>
        </div>
      </div>
      <div class="CompanyDetails_container_right">
        <div class="CompanyDetails_welfare">
          <CPWelfare
            :workTimeEnd="details.workTimeEnd"
            :workTimeStart="details.workTimeStart"
            :workTimeType="details.workTimeType"
            :treatment="details.treatment"
          />
        </div>
        <div class="CompanyDetails_hr">
          <CPHr :list="details.hrList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./CompanyDetails.scss";
import { onMounted, reactive, toRefs } from "vue";
import CompanyIntro from "./CompanyIntro/CompanyIntro.vue";
import CompanyPageComment from "./CompanyPageComment/CompanyPageComment.vue";
import CompanyPagePosition from "./CompanyPagePosition/CompanyPagePosition.vue";
import CPWelfare from "./CPWelfare/CPWelfare.vue";
import CPHr from "./CPHr/CPHr.vue";
import { getDetails, getCompanyPosition } from "../../request/company";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    CompanyIntro,
    CompanyPageComment,
    CompanyPagePosition,
    CPWelfare,
    CPHr,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      tab: +sessionStorage.getItem("CompanyDetails_tab") || 0,
      details: {},
      positionList: [],
      companyId: route.query.companyId,
      total: 0,
    });

    onMounted(() => {
      getCompanyDetails();
      getPosition();
    });

    const changeTab = (tab) => {
      state.tab = tab;
      sessionStorage.setItem("CompanyDetails_tab", tab);
    };

    const getCompanyDetails = async () => {
      const parmas = {
        companyId: route.query.companyId,
      };
      const { data: res } = await getDetails(parmas);
      if (res.status === 0) {
        state.details = res.data;
      }
    };

    const getPosition = async () => {
      const params = {
        companyId: route.query.companyId,
      };
      const { data: res } = await getCompanyPosition(params);
      if (res.status === 0) {
        state.positionList = res.data;
        state.total = res.total;
      }
    };

    const gotoMypage = () => {
      router.push("/myPage");
    };

    return {
      ...toRefs(state),
      changeTab,
      gotoMypage,
    };
  },
};
</script>
