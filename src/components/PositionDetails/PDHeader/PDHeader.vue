<template>
  <div class="PDHeader">
    <div class="PDHeader_header">
      <div class="PDHeader_header_main">
        <div class="PDHeader_header_main_message">
          <span class="PDHeader_header_main_message_name">{{ name }}</span>
          <span
            class="PDHeader_header_main_message_money"
            v-if="+salaryType === 0"
          >
            {{ salaryLow }}-{{ salaryUp }}K * {{ salaryNumber }}薪
          </span>
          <span
            class="PDHeader_header_main_message_money"
            v-if="+salaryType === 1"
          >
            {{ salaryLow }}百/元
          </span>
          <span
            class="PDHeader_header_main_message_money"
            v-if="+salaryType === 2"
          >
            {{ salaryLow }}元/小时
          </span>
        </div>
        <div class="PDHeader_header_main_right">
          <button class="PDHeader_header_main_right_apply" @click="openDialog">
            立即申请
          </button>
        </div>
      </div>
    </div>
    <div class="PDHeader_key">
      <ul class="PDHeader_key_ul">
        <li v-for="item in message" :key="item.id">
          <span v-if="item.content">{{ item.content }}</span>
        </li>
      </ul>
    </div>
    <div>
      <el-dialog
        v-model="noteVisible"
        :title="'申请职位: ' + name"
        width="30%"
        :append-to-body="true"
        center
      >
        <div class="PDHeader_notes" v-if="notes.id">
          <img
            src="../../../assets/imgs/common/file.png"
            class="PDHeader_notes_img"
          />
          <span class="PDHeader_notes_name">
            <a :href="notes.path" target="_blank">
              {{ notes.name }}
            </a>
          </span>
          <span class="PDHeader_notes_check">
            <a :href="notes.path" target="_blank"> 查看 </a>
          </span>
        </div>
        <div class="PDHeader_nothing" v-else>
          您还没有上传简历，快去个人中心上传吧！
        </div>
        <template #footer>
          <span class="dialog-footer">
            <button
              class="PDHeader_button"
              v-if="notes.id"
              @click="addApplication(positionId)"
            >
              投递简历
            </button>
            <button class="PDHeader_button" v-else @click="gotoMypage">
              个人中心
            </button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import "./PDHeader.scss";
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getNotes } from "../../../request/user";
import { addDeliver } from "../../../request/user";
import { ElMessage } from "element-plus";

export default {
  // components: {
  //   Collect,
  // },

  props: [
    "name",
    "salaryLow",
    "salaryUp",
    "salaryNumber",
    "message",
    "positionId",
    "salaryType",
  ],

  setup() {
    const store = useStore();
    const router = useRouter();

    const state = reactive({
      isCollect: false,
      noteVisible: false,
      userId: store.state.user.userInfo.id || "",
      notes: {},
    });

    const changeIsCollect = () => {
      state.isCollect = !state.isCollect;
    };

    const openDialog = () => {
      const { userId } = state;
      if (!userId) {
        router.push("/login");
        ElMessage.warning("请先登录");
      }
      getNote();
      state.noteVisible = true;
    };

    const getNote = async () => {
      const params = {
        userId: state.userId,
      };
      const { data: res } = await getNotes(params);
      if (res.status === 0) {
        state.notes = res.data;
      }
    };

    const gotoMypage = () => {
      router.push("/myPage");
    };

    const addApplication = async (positionId) => {
      const params = {
        positionId,
        bnId: state.notes.id,
        time: new Date().getTime(),
      };
      const { data: res } = await addDeliver(params);
      if (res.status === 0) {
        ElMessage.success(res.message);
      } else {
        ElMessage.error(res.message);
      }
      state.noteVisible = false;
    };

    return {
      ...toRefs(state),
      changeIsCollect,
      openDialog,
      gotoMypage,
      addApplication,
    };
  },
};
</script>
