import { createRouter, createWebHistory } from "vue-router";
import { ElMessage } from "element-plus";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/home/Home/WorkHome.vue"),
    redirect: "/main",
    children: [
      {
        path: "/main",
        name: "main",
        component: () => import("../components/Main/WorkMain.vue"),
      },
      {
        path: "/position",
        name: "position",
        component: () => import("../components/Position/WorkPosition.vue"),
      },
      {
        path: "/positionDetails",
        name: "positionDetails",
        component: () =>
          import("../components/PositionDetails/PositionDetails.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login/WorkLogin.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.path == "/chooseSeat" ||
    to.path == "/user" ||
    to.path == "/chooseSeat/seatSelection" ||
    to.path == "/chooseSeat/confirmOrder" ||
    to.path == "/user/myOrder" ||
    to.path == "/user/myComments" ||
    to.path == "/user/myBalance" ||
    to.path == "/user/myInformation"
  ) {
    const token = sessionStorage.getItem("token");
    if (token === null || token === "") {
      ElMessage.error("您还没有登录，请先登录");
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
