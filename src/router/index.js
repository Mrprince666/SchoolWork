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
      {
        path: "/schoolDgut",
        name: "schoolDgut",
        component: () => import("../components/SchoolDugt/SchoolDugt.vue"),
      },
      {
        path: "/briefingDetails",
        name: "briefingDetails",
        component: () =>
          import("../components/BriefingDetails/BriefingDetails.vue"),
      },
      {
        path: "/commentSquare",
        name: "commentSquare",
        component: () =>
          import("../components/CommentSquare/CommentSquare.vue"),
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
    to.path == "/myPage" ||
    to.path == "/ChatRoom" ||
    to.path == "/creationCenter"
  ) {
    const token = sessionStorage.getItem("token");
    if (token === null || token === "") {
      ElMessage.warning("您还没有登录，请先登录");
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
