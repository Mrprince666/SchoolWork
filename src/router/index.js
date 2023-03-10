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
      {
        path: "/CompanyDetails",
        name: "CompanyDetails",
        component: () =>
          import("../components/CompanyDetails/CompanyDetails.vue"),
      },
      {
        path: "/ChatRoom",
        name: "ChatRoom",
        component: () => import("../components/ChatRoom/ChatRoom.vue"),
      },
      {
        path: "/myPage",
        name: "myPage",
        component: () => import("../components/MyPage/MyPage.vue"),
      },
      {
        path: "/creationCenter",
        name: "creationCenter",
        component: () =>
          import("../components/CreationCenter/CreationCenter.vue"),
      },
      {
        path: "/trendsDetails",
        name: "trendsDetails",
        component: () =>
          import("../components/TrendsDetails/TrendsDetails.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login/WorkLogin.vue"),
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
