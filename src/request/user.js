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

export function getMyComment(params) {
  return service({
    method: "get",
    url: "/user/getMyComment",
    params,
  });
}

export function getMyCollect(params) {
  return service({
    method: "get",
    url: "/user/getMyCollect",
    params,
  });
}

export function getMyInfo(params) {
  return service({
    method: "get",
    url: "/user/getMyInfo",
    params,
  });
}

export function updateMyInfo(data) {
  return service({
    method: "post",
    url: "/user/updateMyInfo",
    data,
  });
}

export function updatePassword(data) {
  return service({
    method: "post",
    url: "/user/updatePassword",
    data,
  });
}

export function getNotes(params) {
  return service({
    method: "get",
    url: "/user/getNotes",
    params,
  });
}

export function updateUserPic(data) {
  return service({
    method: "post",
    url: "/upload/headImage",
    data,
  });
}

export function uploadFile(formData, data) {
  return service.post("/upload/uploadFile", formData, data);
}

export function getDeliverCount(params) {
  return service({
    method: "get",
    url: "/user/getDeliverCount",
    params,
  });
}

export function addDeliver(data) {
  return service({
    method: "post",
    url: "/user/addDeliver",
    data,
  });
}
