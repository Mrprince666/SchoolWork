<template>
  <div class="MPUserInfo">
    <div class="MPUserInfo_title">编辑个人信息</div>
    <div class="MPUserInfo_content">
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">昵称</span>
        <input
          type="text"
          class="MPUserInfo_item_message"
          v-model="userInfo.userName"
        />
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">姓名</span>
        <input
          type="text"
          class="MPUserInfo_item_message"
          placeholder="请输入真实姓名"
          v-model="userInfo.realName"
        />
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">手机号</span>
        <input
          type="text"
          class="MPUserInfo_item_message"
          v-model="userInfo.phone"
        />
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">年龄</span>
        <input
          type="text"
          class="MPUserInfo_item_message"
          placeholder="请输入年龄"
          v-model="userInfo.age"
        />
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">出生日期</span>
        <el-date-picker
          v-model="userInfo.birthday"
          type="date"
          placeholder="请选择您的出生日期"
          value-format="x"
          class="MPUserInfo_item_select"
        />
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">邮箱</span>
        <input
          type="text"
          class="MPUserInfo_item_message"
          placeholder="请输入邮箱"
          v-model="userInfo.email"
        />
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">性别</span>
        <el-select
          v-model="userInfo.sex"
          class="m-2 MPUserInfo_item_select"
          placeholder="请选择您的性别"
          size="large"
        >
          <el-option
            v-for="item in sexList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">意向职业</span>
        <el-select
          v-model="userInfo.tradeId"
          class="m-2 MPUserInfo_item_select"
          placeholder="请选择您的意向职业"
          size="large"
        >
          <el-option
            v-for="item in positionList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">毕业学校</span>
        <input
          type="text"
          class="MPUserInfo_item_message"
          placeholder="请输入毕业学校"
          v-model="userInfo.school"
        />
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">个性称号</span>
        <input
          type="text"
          class="MPUserInfo_item_message"
          placeholder="请输入个性称号"
          v-model="userInfo.pName"
        />
      </div>
      <div class="MPUserInfo_item">
        <span class="MPUserInfo_item_title">学历</span>
        <input
          type="text"
          class="MPUserInfo_item_message"
          placeholder="请输入学历"
          v-model="userInfo.graduation"
        />
      </div>
    </div>
    <div class="MPUserInfo_flooter">
      <div class="MPUserInfo_flooter_left">
        <button
          class="MPUserInfo_flooter_cancel"
          @click="passwordVisible = true"
        >
          修改密码
        </button>
        <button class="MPUserInfo_flooter_define" @click="picVisible = true">
          更换头像
        </button>
      </div>
      <div class="MPUserInfo_flooter_list">
        <button class="MPUserInfo_flooter_cancel" @click="changeCancel">
          取消
        </button>
        <button class="MPUserInfo_flooter_define" @click="changeDefine">
          确定
        </button>
      </div>
    </div>
    <div>
      <el-dialog v-model="userInfoVisible" title="提示" width="30%" center>
        <span> 是否修改用户信息？ </span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="userInfoVisible = false">取消</el-button>
            <el-button type="primary" @click="updateInfo"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <div>
      <el-dialog v-model="passwordVisible" title="修改密码" width="30%" center>
        <div class="MPUserInfo_password">
          <input type="password" placeholder="原密码" v-model="oldPassword" />
          <input type="password" placeholder="新密码" v-model="newPassword" />
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="passwordVisible = false">取消</el-button>
            <el-button type="primary" @click="changePassword"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <div>
      <el-dialog
        v-model="picVisible"
        title="更换头像"
        width="30%"
        :append-to-body="true"
        center
      >
        <div class="MPUserInfo_pic" v-if="picVisible">
          <UploadImgs :limit="1" :getBase64="getBase64" />
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="picVisible = false">取消</el-button>
            <el-button type="primary" @click="changePic"> 确定 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import "./MPUserInfo.scss";
import {
  getMyInfo,
  updateMyInfo,
  updatePassword,
  updateUserPic,
} from "../../../request/user";
import { getAllPt } from "../../../request/position";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import UploadImgs from "../../../common/UploadImg/UploadImgs.vue";

export default {
  components: {
    UploadImgs,
  },

  setup() {
    const store = useStore();

    const state = reactive({
      userInfo: {},
      info: {},
      userId: store.state.user.userInfo.id || "",
      userInfoVisible: false,
      passwordVisible: false,
      picVisible: false,
      oldPassword: "",
      newPassword: "",
      base64: "",
      pic: "",
      positionList: [],
    });

    const sexList = [
      {
        value: 0,
        label: "男",
      },
      {
        value: 1,
        label: "女",
      },
    ];

    onMounted(() => {
      getList();
      getAllPosition();
    });

    const getList = async () => {
      const parmas = {
        userId: state.userId,
      };
      const { data: res } = await getMyInfo(parmas);
      if (res.status === 0) {
        state.userInfo = JSON.parse(JSON.stringify(res.data));
        state.info = JSON.parse(JSON.stringify(res.data));
        state.pic = res.data.pic;
        if (state.userInfo.birthday) {
          state.userInfo.birthday = new Date(+state.userInfo.birthday);
          state.info.birthday = new Date(+state.userInfo.birthday);
        }
      }
    };

    const changeCancel = () => {
      state.userInfo = JSON.parse(JSON.stringify(state.info));
      ElMessage.success("取消成功！");
    };

    const changeDefine = () => {
      state.userInfoVisible = true;
    };

    const getAllPosition = async () => {
      const { data: res } = await getAllPt();
      if (res.status === 0) {
        state.positionList = res.data;
      }
    };

    const updateInfo = async () => {
      const parmas = {
        ...state.userInfo,
        birthday: new Date(state.userInfo.birthday).getTime(),
      };
      const { data: res } = await updateMyInfo(parmas);
      if (res.status === 0) {
        state.info = JSON.parse(JSON.stringify(state.userInfo));
        state.userInfoVisible = false;
        const p = {
          ...parmas,
          pic: state.pic,
        };
        store.commit("user/setUserInfo", p);
        ElMessage.success(res.message);
      } else {
        ElMessage.error(res.message);
      }
    };

    const changePassword = async () => {
      const params = {
        oldPassword: state.oldPassword,
        newPassword: state.newPassword,
        userId: state.userId,
      };
      const { data: res } = await updatePassword(params);
      if (res.status === 0) {
        state.newPassword = "";
        state.oldPassword = "";
        state.passwordVisible = false;
        ElMessage.success(res.message);
      } else {
        ElMessage.error(res.message);
      }
    };

    const getBase64 = (base64) => {
      state.base64 = base64;
    };

    const changePic = async () => {
      if (!state.base64) return;
      const params = {
        id: state.userId,
        imgData: state.base64,
      };
      const { data: res } = await updateUserPic(params);
      if (res.status === 0) {
        state.picVisible = false;
        state.pic = res.data;
        const p = {
          ...state.userInfo,
          birthday: new Date(state.userInfo.birthday).getTime(),
          pic: state.pic,
        };
        store.commit("user/setUserInfo", p);
        ElMessage.success("更改成功");
      } else {
        ElMessage.error("更改失败");
      }
    };

    return {
      ...toRefs(state),
      sexList,
      changeCancel,
      changeDefine,
      updateInfo,
      changePassword,
      getBase64,
      changePic,
    };
  },
};
</script>
