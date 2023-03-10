<template>
  <div class="MPDelivery">
    <ul class="MPDelivery_tab">
      <li :class="{ MPDelivery_tab_active: tab === 0 }" @click="changeTab(0)">
        已投递(1000)
      </li>
      <li :class="{ MPDelivery_tab_active: tab === 1 }" @click="changeTab(1)">
        被查看(100)
      </li>
      <li :class="{ MPDelivery_tab_active: tab === 2 }" @click="changeTab(2)">
        已通过(0)
      </li>
      <li :class="{ MPDelivery_tab_active: tab === 3 }" @click="changeTab(3)">
        不合适(0)
      </li>
    </ul>
    <div class="MPDelivery_content">
      <div class="MPDelivery_position">
        <ul class="MPDelivery_position_list">
          <li class="MPDelivery_position_list_li" v-for="item in 5" :key="item">
            <MPDItem />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "./MPDelivery.scss";
import MPDItem from "./MPDItem/MPDItem.vue";
import { reactive, toRefs } from "vue";

export default {
  components: {
    MPDItem,
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
