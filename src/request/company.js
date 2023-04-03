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
