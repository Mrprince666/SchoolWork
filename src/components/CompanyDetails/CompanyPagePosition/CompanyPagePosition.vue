<template>
  <div class="CompanyPagePosition">
    <div class="CompanyPagePosition_header">
      <ul class="CompanyPagePosition_type">
        <li :class="{ CompanyPagePosition_active: tab === 0 }">全部(89)</li>
        <li :class="{ CompanyPagePosition_active: tab === 1 }">校招(6)</li>
        <li :class="{ CompanyPagePosition_active: tab === 2 }">实习(49)</li>
        <li :class="{ CompanyPagePosition_active: tab === 3 }">社招(34)</li>
      </ul>
      <div class="CompanyPagePosition_selection">
        <ul class="CompanyPagePosition_selection_ul">
          <li class="CompanyPagePosition_selection_city">
            <el-cascader
              v-model="cityList"
              :options="cityOptions"
              :props="type"
              @change="handleChangeSelection"
              placeholder="全部地点"
              :show-all-levels="false"
              clearable
              collapse-tags
              collapse-tags-tooltip
            />
          </li>
          <li class="CompanyPagePosition_selection_city">
            <el-cascader
              v-model="cityList"
              :options="cityOptions"
              :props="type"
              @change="handleChangeSelection"
              placeholder="全部职位"
              :show-all-levels="false"
              clearable
              collapse-tags
              collapse-tags-tooltip
            />
          </li>
          <li class="CompanyPagePosition_selection_city">
            <el-cascader
              v-model="cityList"
              :options="cityOptions"
              :props="type"
              @change="handleChangeSelection"
              placeholder="请选择薪资"
              :show-all-levels="false"
              clearable
              collapse-tags
              collapse-tags-tooltip
            />
          </li>
        </ul>
        <div class="CompanyPagePosition_selection_search">
          <input type="text" placeholder="搜索职位" />
          <span>搜索</span>
        </div>
      </div>
    </div>
    <div class="CompanyPagePosition_content">
      <ul class="CompanyPagePosition_content_ul">
        <li v-for="item in 6" :key="item">
          <CPItem />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./CompanyPagePosition.scss";
import { reactive, toRefs } from "vue";
import CPItem from "../CPItem/CPItem.vue";

export default {
  components: {
    CPItem,
  },

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
