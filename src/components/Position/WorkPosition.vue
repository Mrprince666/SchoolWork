<template>
  <div class="WorkPosition">
    <div class="WorkPosition_header">
      <div class="WorkPosition_search">
        <div class="WorkPosition_search_container">
          <input
            class="WorkPosition_search_input"
            type="text"
            placeholder="搜索职位"
            v-model="name"
          />
          <span class="WorkPosition_search_sousuo" @click="searchList"
            >搜索</span
          >
        </div>
      </div>
      <div class="WorkPosition_hot">
        <div class="WorkPosition_hot_com">
          <span class="WorkPosition_hot_name">热门城市:</span>
          <ul class="WorkPosition_hot_ul">
            <li
              v-for="item in hotCity"
              :key="item.id"
              @click="changeHotCity(item.name)"
              :class="{ WorkPosition_hot_ul_li: cityName === item.name }"
            >
              {{ item.name }}
            </li>
          </ul>
          <span class="WorkPosition_hot_clear" @click="clearMessage"
            >清空选项</span
          >
        </div>
        <div class="WorkPosition_hot_com WorkPosition_hot_position">
          <span class="WorkPosition_hot_name">热门职位:</span>
          <ul class="WorkPosition_hot_ul">
            <li
              v-for="item in hotPosition"
              :key="item.id"
              :class="{ WorkPosition_hot_ul_li: positionName === item.id }"
              @click="changePositionName(item.id)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="WorkPosition_selection">
        <div class="WorkPosition_selection_city">
          <el-cascader
            v-model="cityList"
            :options="cityOptions"
            :props="type"
            @change="(value) => handleChangeSelection(value, 'cityList')"
            placeholder="选择城市"
            :show-all-levels="false"
            clearable
            collapse-tags
            collapse-tags-tooltip
          />
        </div>
        <div class="WorkPosition_selection_position">
          <el-cascader
            v-model="positionList"
            :options="positionOptions"
            :props="type"
            @change="(value) => handleChangeSelection(value, 'positionList')"
            placeholder="职位类型"
            :show-all-levels="false"
            clearable
            collapse-tags
            collapse-tags-tooltip
          />
        </div>
        <div class="WorkPosition_selection_money">
          <el-select
            @change="changeMoney"
            v-model="salary"
            class="m-2"
            placeholder="薪资待遇"
          >
            <el-option
              v-for="item in salaryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </div>
    <div class="WorkPosition_main">
      <ul class="WorkPosition_main_left" v-if="list.length > 0">
        <li
          class="WorkPosition_main_left_item"
          v-for="item in list"
          :key="item"
          @click="gotoDetails(item.id)"
        >
          <PositionItem :position="item" />
        </li>
        <div class="WorkPosition_pagination" v-if="total > pageCount">
          <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageCount"
            :current-page="page"
            class="mt-4 WorkPosition_pagination_page"
            @current-change="handleCurrentChange"
          />
        </div>
      </ul>
      <div class="WorkPosition_main_nothing" v-else>暂无数据！</div>
      <div class="WorkPosition_main_right">
        <div class="WorkPosition_main_right_title">为您推荐</div>
        <div v-if="!userId" class="WorkPosition_main_right_login">
          <span>东理网提醒你，请先登录</span>
          <div class="WorkPosition_main_right_login_button">
            <button @click="login">登录</button>
          </div>
        </div>
        <ul class="WorkPosition_main_right_item">
          <li
            v-for="item in recommendList"
            :key="item.id"
            @click="gotoDetails(item.id)"
          >
            <PositionRecommend :position="item"></PositionRecommend>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "./WorkPosition.scss";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import PositionItem from "./PositionItem/PositionItem.vue";
import PositionRecommend from "./PositionRecommend/PositionRecommend.vue";
import { useStore } from "vuex";
import {
  getHotCity,
  getHotPosition,
  getAllCity,
  getAllPosition,
  getAllSalary,
  selectPosition,
  recommendPosition,
} from "../../request/position";

export default {
  components: {
    PositionItem,
    PositionRecommend,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const state = reactive({
      // 选择的城市
      cityName: "",
      positionName: "",
      salary: "",
      name: route.query.input || "",
      hotCity: [],
      hotPosition: [],
      cityList: [],
      positionList: [],
      cityOptions: [],
      positionOptions: [],
      salaryOptions: [],
      page: 1,
      pageCount: 5,
      list: [],
      recommendList: [],
      userId: store.state.user.userInfo.id || "",
      total: 0,
    });

    const type = {
      expandTrigger: "hover",
      multiple: true,
    };

    onMounted(() => {
      getHotCityList();
      getHotPositionList();
      getAllCityList();
      getAllPositionList();
      getAllSalaryList();
      getPositionList();
      getRecommendList();
    });

    const handleChangeSelection = (list, type) => {
      state[type] = list.map((item) => {
        return item[1];
      });

      getPositionList();
    };

    const gotoDetails = (positionId) => {
      router.push({
        path: "/positionDetails",
        query: {
          positionId,
        },
      });
    };

    const getHotCityList = async () => {
      const { data: res } = await getHotCity();
      if (res.status === 0) {
        state.hotCity = res.data;
      }
    };

    const getHotPositionList = async () => {
      const { data: res } = await getHotPosition();
      if (res.status === 0) {
        state.hotPosition = res.data;
      }
    };

    const getAllCityList = async () => {
      const { data: res } = await getAllCity();
      if (res.status === 0) {
        state.cityOptions = res.data;
      }
    };

    const getAllPositionList = async () => {
      const { data: res } = await getAllPosition();
      if (res.status === 0) {
        state.positionOptions = res.data;
      }
    };

    const getAllSalaryList = async () => {
      const { data: res } = await getAllSalary();
      if (res.status === 0) {
        state.salaryOptions = res.data;
      }
    };

    const changeHotCity = (city) => {
      state.cityName = city;
      getPositionList();
    };

    const changePositionName = (id) => {
      state.positionName = id;
      getPositionList();
    };

    const changeMoney = () => {
      getPositionList();
    };

    const searchList = () => {
      getPositionList();
    };

    const clearMessage = () => {
      state.cityName = "";
      state.positionName = "";
      state.cityList = [];
      state.salary = "";
      state.positionList = [];
      state.page = 1;
      state.pageCount = 5;
      state.name = "";
      getPositionList();
    };

    // 搜索请求
    const getPositionList = async () => {
      const params = {
        hotCity: state.cityName,
        hotPosition: state.positionName,
        positionList: state.positionList,
        cityList: state.cityList,
        salaryLow: state.salary ? state.salaryOptions[state.salary - 1].low : 0,
        salaryUp: state.salary ? state.salaryOptions[state.salary - 1].up : 100,
        page: state.page,
        pageCount: state.pageCount,
        name: state.name,
      };
      const { data: res } = await selectPosition(params);
      if (res.status === 0) {
        state.list = res.data;
        state.total = res.total;
      }
    };

    // 推荐
    const getRecommendList = async () => {
      const params = {
        userId: state.userId ? state.userId : 0,
      };
      const { data: res } = await recommendPosition(params);
      if (res.status === 0) {
        state.recommendList = res.data;
      }
    };

    const handleCurrentChange = (val) => {
      state.page = val;
      getPositionList();
    };

    const login = () => {
      router.push("/login");
    };

    return {
      ...toRefs(state),
      handleChangeSelection,
      type,
      gotoDetails,
      changeHotCity,
      changePositionName,
      changeMoney,
      clearMessage,
      searchList,
      handleCurrentChange,
      login,
    };
  },
};
</script>
