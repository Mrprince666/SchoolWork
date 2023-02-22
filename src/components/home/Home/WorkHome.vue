<template>
  <div class="Home_home">
    <header class="Home_nav"><Nav /></header>
    <main class="Home_container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Nav from "../WorkNav/WorkNav.vue";
import "./WorkHome.scss";

export default {
  components: {
    Nav,
  },
};
</script>
