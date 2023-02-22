import service from "./index";

// 注册
export function register(data) {
  return service({
    method: "post",
    url: "/user/register",
    data,
  });
}

// 登录
export function login(data) {
  return service({
    method: "post",
    url: "/user/login",
    data: data,
  });
}
