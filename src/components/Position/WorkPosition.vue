<template>
  <div class="WorkPosition">
    <div class="WorkPosition_header">
      <div class="WorkPosition_search">
        <div class="WorkPosition_search_container">
          <input
            class="WorkPosition_search_input"
            type="text"
            placeholder="搜索职位"
          />
          <span class="WorkPosition_search_sousuo">搜索</span>
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
          <span class="WorkPosition_hot_clear">清空选项</span>
        </div>
        <div class="WorkPosition_hot_com WorkPosition_hot_position">
          <span class="WorkPosition_hot_name">热门职位:</span>
          <ul class="WorkPosition_hot_ul">
            <li v-for="item in hotPosition" :key="item.id">{{ item.name }}</li>
          </ul>
        </div>
      </div>
      <div class="WorkPosition_selection">
        <div class="WorkPosition_selection_city">
          <el-cascader
            v-model="cityList"
            :options="cityOptions"
            :props="type"
            @change="handleChangeSelection"
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
          <el-select v-model="salary" class="m-2" placeholder="薪资待遇">
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
      <ul class="WorkPosition_main_left">
        <li
          class="WorkPosition_main_left_item"
          v-for="item in 6"
          :key="item"
          @click="gotoDetails"
        >
          <PositionItem />
        </li>
      </ul>
      <div class="WorkPosition_main_right">
        <div class="WorkPosition_main_right_title">为您推荐</div>
        <ul class="WorkPosition_main_right_item">
          <li v-for="item in 4" :key="item">
            <PositionRecommend></PositionRecommend>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "./WorkPosition.scss";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import PositionItem from "./PositionItem/PositionItem.vue";
import PositionRecommend from "./PositionRecommend/PositionRecommend.vue";
import {
  getHotCity,
  getHotPosition,
  getAllCity,
  getAllPosition,
  getAllSalary,
} from "../../request/position";

export default {
  components: {
    PositionItem,
    PositionRecommend,
  },

  setup() {
    const router = useRouter();

    const state = reactive({
      // 选择的城市
      cityName: "",
      hotCity: [],
      hotPosition: [],
      cityList: [],
      positionList: [],
      cityOptions: [],
      positionOptions: [],
      salaryOptions: [],
      salary: "",
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
    });

    const handleChangeSelection = (value, type) => {
      state[type] = value;
      console.log(state);
    };

    const gotoDetails = () => {
      router.push("/positionDetails");
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
    };

    return {
      ...toRefs(state),
      handleChangeSelection,
      type,
      gotoDetails,
      changeHotCity,
    };
  },
};
</script>
