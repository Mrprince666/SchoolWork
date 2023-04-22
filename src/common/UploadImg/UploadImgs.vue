<template>
  <div class="upload-imgs">
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      :on-remove="handleRemove"
      :on-change="handleAvatarSuccess"
      :limit="limit"
      :file-list="imgUrls"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  props: {
    limit: {
      require: true,
    },
    getBase64: {
      require: false,
    },
    delBase64: {
      require: false,
    },
    imgUrls: {
      require: false,
    },
  },

  setup(props) {
    const state = reactive({
      base64: "",
      img: "",
    });

    // 移除照片
    const handleRemove = () => {
      // props.delBase64(file.uid);
      let res = null;
      props.getBase64(res);
      props.delBase64 && props.delBase64();
    };

    // 添加照片触发
    const handleAvatarSuccess = (file) => {
      var reader = new FileReader();
      reader.readAsDataURL(file.raw); // 一定要传入file格式
      reader.onload = () => {
        state.base64 = reader.result;
        state.img = reader.result;
        props.getBase64(state.base64);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    };

    return {
      ...toRefs(state),
      handleRemove,
      handleAvatarSuccess,
    };
  },
};
</script>

<style lang="scss" scoped>
.upload-imgs {
  // width: 1200px;
}
</style>
