import service from "./index";

// 首页热门企业列表
export function getHotCompanyList() {
  return service({
    method: "get",
    url: "/company/getHotList",
  });
}

// 首页热门企业
export function getHotCompany(params) {
  return service({
    method: "get",
    url: "/company/getHotCompany",
    params,
  });
}

// 详情
export function getDetails(params) {
  return service({
    method: "get",
    url: "/company/getDetails",
    params,
  });
}

// 详情
export function getCompanyPosition(params) {
  return service({
    method: "get",
    url: "/company/getCompanyPosition",
    params,
  });
}
