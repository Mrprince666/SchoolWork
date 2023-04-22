<template>
  <div class="BriefingDetails">
    <div class="BriefingDetails_header">
      <div>
        <img class="BriefingDetails_header_img" :src="details.pic" />
      </div>
      <div class="BriefingDetails_header_content">
        <span class="BriefingDetails_header_content_name">{{
          details.title
        }}</span>
        <span
          >{{ standardAllTime(+details.startTime) }} 至
          {{ standardAllTime(+details.endTime) }}</span
        >
        <span>{{ details.place }}</span>
        <span>{{ details.fullName }}</span>
      </div>
    </div>
    <div class="BriefingDetails_title">宣讲会企业</div>
    <div class="BriefingDetails_company">
      <div>
        <img class="BriefingDetails_company_img" :src="details.cPic" />
      </div>
      <div class="BriefingDetails_company_content">
        <span class="BriefingDetails_company_name">{{ details.fullName }}</span>
        <ul class="BriefingDetails_company_list">
          <li class="BriefingDetails_company_list_item">
            <span class="BriefingDetails_company_list_lable">招聘职位</span>
            <span class="BriefingDetails_company_list_color"
              >{{
                details.positionList ? details.positionList.length : 0
              }}个</span
            >
          </li>
          <li class="BriefingDetails_company_list_item">
            <span class="BriefingDetails_company_list_lable">联系人</span>
            <span>{{ details.contacts }}</span>
          </li>
          <li class="BriefingDetails_company_list_item">
            <span class="BriefingDetails_company_list_lable">企业网站</span>
            <span>{{ details.website }}</span>
          </li>
          <li class="BriefingDetails_company_list_item">
            <span class="BriefingDetails_company_list_lable">邮箱地址 </span>
            <span>{{ details.email }}</span>
          </li>
          <li class="BriefingDetails_company_list_item">
            <span class="BriefingDetails_company_list_lable">联系电话</span>
            <span class="BriefingDetails_company_list_color">{{
              details.telephone
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="BriefingDetails_title">公司介绍</div>
    <div class="BriefingDetails_des">
      {{ details.introduction }}
    </div>
    <div class="BriefingDetails_title">岗位信息</div>
    <div class="BriefingDetails_position">
      <table class="BriefingDetails_table">
        <thead>
          <tr>
            <th class="BriefingDetails_table_name">职位名称</th>
            <th class="BriefingDetails_table_address">工作地点</th>
            <th class="BriefingDetails_table_count">招聘人数</th>
            <th class="BriefingDetails_table_money">岗位薪资</th>
            <th class="BriefingDetails_table_request">职位要求</th>
            <th class="BriefingDetails_table_time">招聘时间</th>
            <th class="BriefingDetails_table_control">操作</th>
          </tr>
        </thead>
        <tbody v-if="details.positionList">
          <tr v-for="item in details.positionList" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.fullAddress }}</td>
            <td>{{ item.count }}</td>
            <td>{{ item.salaryLow * 1000 }} ~ {{ item.salaryUp * 1000 }}</td>
            <td>{{ item.p_require }}</td>
            <td>
              {{ standardTime(+item.startTime) }} 至
              {{ standardTime(+item.endTime) }}
            </td>
            <td>
              <button @click="openDialog(item.id, item.name)">投递简历</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <el-dialog
        v-model="noteVisible"
        :title="'申请职位: ' + name"
        width="30%"
        :append-to-body="true"
        center
      >
        <div class="BriefingDetails_notes" v-if="notes.id">
          <img
            src="../../assets/imgs/common/file.png"
            class="BriefingDetails_notes_img"
          />
          <span class="BriefingDetails_notes_name">
            <a :href="notes.path" target="_blank">
              {{ notes.name }}
            </a>
          </span>
          <span class="BriefingDetails_notes_check">
            <a :href="notes.path" target="_blank"> 查看 </a>
          </span>
        </div>
        <div class="BriefingDetails_nothing" v-else>
          您还没有上传简历，快去个人中心上传吧！
        </div>
        <template #footer>
          <span class="dialog-footer">
            <button
              class="BriefingDetails_button"
              v-if="notes.id"
              @click="addApplication(positionId)"
            >
              投递简历
            </button>
            <button class="BriefingDetails_button" v-else @click="gotoMypage">
              个人中心
            </button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import "./BriefingDetails.scss";
import { useRoute, useRouter } from "vue-router";
import { reactive, toRefs, onMounted } from "vue";
import { getActivityDestails } from "../../request/school";
import { standardAllTime, standardTime } from "../../assets/js/standardTime";
import { getNotes, addDeliver } from "../../request/user";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      id: route.query.id,
      details: {},
      userId: store.state.user.userInfo.id || "",
      notes: {},
      noteVisible: false,
      positionId: "",
      name: "",
    });

    onMounted(() => {
      getDetail();
      getNote();
    });

    const getDetail = async () => {
      const parmas = {
        id: route.query.id,
      };
      const { data: res } = await getActivityDestails(parmas);
      if (res.status === 0) {
        state.details = res.data;
      }
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

    const openDialog = (positionId, name) => {
      if (!state.userId) {
        router.push("/login");
        ElMessage.warning("请先登录");
      }
      state.noteVisible = true;
      state.positionId = positionId;
      state.name = name;
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
      standardAllTime,
      standardTime,
      gotoMypage,
      addApplication,
      openDialog,
    };
  },
};
</script>
