<template>
  <div class="dgut">
    <div class="dgut_header">
      <ul class="dgut_header_nav">
        <li
          :class="{ dgut_header_nav_item: true, dgut_header_active: tab === 0 }"
          @click="changeNav(0)"
        >
          招聘信息
        </li>
        <li
          :class="{ dgut_header_nav_item: true, dgut_header_active: tab === 1 }"
          @click="changeNav(1)"
        >
          招聘活动
        </li>
        <li
          :class="{ dgut_header_nav_item: true, dgut_header_active: tab === 2 }"
          @click="changeNav(2)"
        >
          校内兼职
        </li>
      </ul>
    </div>
    <div class="dgut_content">
      <div class="dgut_content_main" v-show="tab === 0">
        <DugtCompany />
      </div>
      <div class="dgut_content_main" v-show="tab === 1">
        <DgutActivity />
      </div>
      <div class="dgut_content_main" v-show="tab === 2">
        <MoonLight />
      </div>
    </div>
  </div>
</template>

<script>
import "./SchoolDgut.scss";
import { reactive, toRefs } from "vue";
import DugtCompany from "./DugtCompany/DugtCompany.vue";
import DgutActivity from "./DgutActivity/DgutActivity.vue";
import MoonLight from "./MoonLight/MoonLight.vue";

export default {
  components: {
    DugtCompany,
    DgutActivity,
    MoonLight,
  },

  setup() {
    const state = reactive({
      tab: +sessionStorage.getItem("dgut_tab") || 0,
    });

    const changeNav = (tab) => {
      state.tab = tab;
      sessionStorage.setItem("dgut_tab", tab);
    };
    return {
      ...toRefs(state),
      changeNav,
    };
  },
};
</script>
