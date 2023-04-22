import service from "./index";

export function getPositionHotTabs() {
  return service({
    method: "get",
    url: "/position/hotTabs",
  });
}

export function getPositionHotList(params) {
  return service({
    method: "get",
    url: "/position/hotList",
    params,
  });
}

export function getPositionHotDescribeList(params) {
  return service({
    method: "get",
    url: "/position/hotDescribeList",
    params,
  });
}

export function getHotCity() {
  return service({
    method: "get",
    url: "/position/getHotCity",
  });
}

export function getHotPosition() {
  return service({
    method: "get",
    url: "/position/getHotPosition",
  });
}

export function getAllCity() {
  return service({
    method: "get",
    url: "/position/getAllCity",
  });
}

export function getAllPosition() {
  return service({
    method: "get",
    url: "/position/getAllPosition",
  });
}

export function getAllSalary() {
  return service({
    method: "get",
    url: "/position/getAllSalary",
  });
}

// 搜索职位
export function selectPosition(params) {
  return service({
    method: "get",
    url: "/position/selectPosition",
    params,
  });
}

// 搜索职位描述列表
export function selectPositionDes(params) {
  return service({
    method: "get",
    url: "/position/selectPositionDes",
    params,
  });
}

// 推荐职位
export function recommendPosition(params) {
  return service({
    method: "get",
    url: "/position/recommendPosition",
    params,
  });
}

// 详情职位
export function getDetails(params) {
  return service({
    method: "get",
    url: "/position/getDetails",
    params,
  });
}

// 职位hr
export function getAHrMessage(params) {
  return service({
    method: "get",
    url: "/position/getAHrMessage",
    params,
  });
}

// 职位地址
export function getAddress(params) {
  return service({
    method: "get",
    url: "/position/getAddress",
    params,
  });
}

// 职位评论
export function getPositionComment(params) {
  return service({
    method: "get",
    url: "/position/getPositionComment",
    params,
  });
}

// 职位分类
export function getAllPt() {
  return service({
    method: "get",
    url: "/position/getAllPt",
  });
}

// 查看的简历情况
export function getPositionDeliver(params) {
  return service({
    method: "get",
    url: "/position/getPositionDeliver",
    params,
  });
}
