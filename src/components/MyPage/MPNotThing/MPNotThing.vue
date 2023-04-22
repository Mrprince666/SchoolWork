<template>
  <div class="MPNotThing">
    <div class="MPNotThing_img">
      <img src="../../../assets/imgs/common/file.png" alt="" />
    </div>
    <div class="MPNotThing_text">你还没发布过内容哦，快来分享吧！</div>
    <div class="MPNotThing_publish">
      <button class="MPNotThing_publish_button" @click="gotoCreate">
        去发布
      </button>
    </div>
  </div>
</template>

<script>
import "./MPNotThing.scss";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const gotoCreate = () => {
      router.push("/creationCenter");
    };
    return {
      gotoCreate,
    };
  },
};
</script>
