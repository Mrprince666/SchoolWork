<template>
  <div class="MPCollect">
    <ul class="MPCollect_list">
      <li class="MPCollect_list_item" v-for="item in list" :key="item.id">
        <CommitItem :comment="item" />
      </li>
    </ul>
    <div class="MPCollect_nothing" v-if="list.length === 0">暂无收藏</div>
  </div>
</template>

<script>
import "./MPCollect.scss";
import CommitItem from "../../../common/CommitItem/CommitItem.vue";
import { reactive, toRefs, onMounted } from "vue";
import { getMyCollect } from "../../../request/user";
import { useStore } from "vuex";

export default {
  components: {
    CommitItem,
  },
  setup() {
    const store = useStore();

    const state = reactive({
      page: 1,
      pageCount: 5,
      total: 0,
      list: [],
      userId: store.state.user.userInfo.id,
    });

    onMounted(() => {
      getList();
    });

    const getList = async () => {
      const parmas = {
        page: state.page,
        pageCount: state.pageCount,
        userId: state.userId,
      };
      const { data: res } = await getMyCollect(parmas);
      if (res.status === 0) {
        state.total = res.total;
        state.list = res.data;
      }
    };
    return {
      ...toRefs(state),
    };
  },
};
</script>
