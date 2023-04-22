<template>
  <div class="MPAppendix">
    <div class="MPAppendix_title">简历管理</div>
    <div class="MPAppendix_onthing" v-if="nothing">您没有上传简历哦！</div>
    <div class="MPAppendix_content" v-else>
      <span class="MPAppendix_name">
        <img
          src="../../../assets/imgs/common/file.png"
          class="MPAppendix_name_img"
        />
        <a :href="note.path" target="_blank" class="MPAppendix_name_text">{{
          note.name
        }}</a>
      </span>
      <span class="MPAppendix_tips">
        <a :href="note.path" target="_blank">查看</a>
      </span>
    </div>
    <div class="MPAppendix_upload">
      <label for="file" class="MPAppendix_upload_button">
        <input
          type="file"
          id="file"
          @change="upload"
          accept=".pdf"
          style="display: none"
        />
        上传简历
      </label>
    </div>
  </div>
</template>

<script>
import "./MPAppendix.scss";
import { reactive, toRefs, onMounted } from "vue";
import { useStore } from "vuex";
import { getNotes, uploadFile } from "../../../request/user";
import { ElMessage } from "element-plus";

export default {
  setup() {
    const store = useStore();
    const state = reactive({
      userId: store.state.user.userInfo.id || "",
      nothing: false,
      note: {},
      fileName: "",
    });

    onMounted(() => {
      getMessage();
    });

    const getMessage = async () => {
      const params = {
        userId: state.userId,
      };
      const { data: res } = await getNotes(params);
      if (res.status === 0) {
        if (res.data === 0) {
          state.nothing = true;
        } else {
          state.note = res.data;
        }
      }
    };

    const handleRemove = () => {};

    const upload = async (event) => {
      const file = event.target.files[0];
      if (!file.name) {
        return;
      }
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", state.userId);
      formData.append("fileName", file.name);
      const { data: res } = await uploadFile(formData, {
        "Content-type": "multipart/form-data;charset=utf-8",
      });
      if (res.status === 0) {
        state.note = res.data;
        state.nothing = false;
        ElMessage.success("上传成功");
      } else {
        ElMessage.error("上传失败");
      }
    };

    return {
      ...toRefs(state),
      handleRemove,
      upload,
    };
  },
};
</script>
