<template>
  <div class="CompanyPagePosition">
    <div class="CompanyPagePosition_header">
      <ul class="CompanyPagePosition_type">
        <li
          :class="{ CompanyPagePosition_active: tab === 0 }"
          @click="changeTab(0)"
        >
          全部
        </li>
        <li
          :class="{ CompanyPagePosition_active: tab === 1 }"
          @click="changeTab(1)"
        >
          校招
        </li>
        <li
          :class="{ CompanyPagePosition_active: tab === 2 }"
          @click="changeTab(2)"
        >
          实习
        </li>
        <li
          :class="{ CompanyPagePosition_active: tab === 3 }"
          @click="changeTab(3)"
        >
          社招
        </li>
        <li class="CompanyPagePosition_clear" @click="clearSelect">清空选项</li>
      </ul>
      <div class="CompanyPagePosition_selection">
        <ul class="CompanyPagePosition_selection_ul">
          <li class="CompanyPagePosition_selection_city">
            <el-select
              @change="changeMessage"
              v-model="city"
              class="m-2"
              placeholder="全部地点"
            >
              <el-option
                v-for="item in allCity"
                :key="item.id"
                :label="item.city"
                :value="item.city"
              />
            </el-select>
          </li>
          <li class="CompanyPagePosition_selection_city">
            <el-select
              @change="changeMessage"
              v-model="tradeId"
              class="m-2"
              placeholder="全部职位"
            >
              <el-option
                v-for="item in allPosition"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </li>
          <li class="CompanyPagePosition_selection_city">
            <el-select
              @change="changeMessage"
              v-model="salary"
              class="m-2"
              placeholder="薪资范围"
            >
              <el-option
                v-for="item in allSalary"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </li>
        </ul>
        <div class="CompanyPagePosition_selection_search">
          <input type="text" placeholder="搜索职位" v-model="input" />
          <span @click="search">搜索</span>
        </div>
      </div>
    </div>
    <div class="CompanyPagePosition_content">
      <ul class="CompanyPagePosition_content_ul">
        <li v-for="item in list" :key="item.id" @click="gotoDetails(item.id)">
          <CPItem :position="item" />
        </li>
        <div class="CompanyPagePosition_pagination" v-if="allTotal > pageCount">
          <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="allTotal"
            :page-size="pageCount"
            :current-page="page"
            class="mt-4 CompanyPagePosition_pagination_page"
            @current-change="handleCurrentChange"
          />
        </div>
      </ul>
      <div class="CompanyPagePosition_content_nothing" v-if="list.length === 0">
        暂无合适的职位！
      </div>
    </div>
  </div>
</template>

<script>
import "./CompanyPagePosition.scss";
import { reactive, toRefs, watch } from "vue";
import CPItem from "../CPItem/CPItem.vue";
import { useRouter } from "vue-router";
import { getCompanyPosition } from "../../../request/company";

export default {
  components: {
    CPItem,
  },

  props: [
    "allCity",
    "allPosition",
    "allSalary",
    "companyId",
    "positionList",
    "total",
  ],

  setup(props) {
    const router = useRouter();

    const state = reactive({
      tab: +sessionStorage.getItem("CompanyPagePosition_tab") || 0,
      city: "",
      tradeId: "",
      salary: "",
      input: "",
      page: 1,
      pageCount: 5,
      companyId: props.companyId,
      salaryList: props.allSalary || [],
      list: [],
      allTotal: 0,
    });

    watch(
      () => props.allSalary,
      (val) => {
        state.salaryList = val;
      },
      { immediate: true }
    );

    watch(
      () => props.positionList,
      (val) => {
        state.list = val;
      },
      { immediate: true }
    );

    watch(
      () => props.total,
      (val) => {
        state.allTotal = val;
      },
      { immediate: true }
    );

    const changeMessage = () => {
      getPosition();
    };

    const gotoDetails = (positionId) => {
      router.push({
        path: "/positionDetails",
        query: {
          positionId,
        },
      });
    };

    const clearSelect = () => {
      state.city = "";
      state.tradeId = "";
      state.salary = "";
      state.input = "";
    };

    const getPosition = async () => {
      const params = {
        companyId: state.companyId,
        input: state.input,
        tradeId: state.tradeId,
        city: state.city,
        salaryLow: state.salary ? state.salaryList[state.salary - 1].low : 0,
        salaryUp: state.salary ? state.salaryList[state.salary - 1].up : 100,
        page: state.page,
        pageCount: state.pageCount,
        type: state.tab,
      };
      const { data: res } = await getCompanyPosition(params);
      if (res.status === 0) {
        state.list = res.data;
      }
    };

    const changeTab = (tab) => {
      state.tab = tab;
      sessionStorage.setItem("CompanyPagePosition_tab", tab);
      getPosition();
    };

    const search = () => {
      getPosition();
    };

    const handleCurrentChange = (val) => {
      state.page = val;
      getPosition();
    };

    return {
      ...toRefs(state),
      changeMessage,
      gotoDetails,
      clearSelect,
      changeTab,
      search,
      handleCurrentChange,
    };
  },
};
</script>
