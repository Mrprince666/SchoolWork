import service from "./index";

export function getCompanyList(params) {
  return service({
    method: "get",
    url: "/school/getCompanyList",
    params,
  });
}

export function getActivityList(params) {
  return service({
    method: "get",
    url: "/school/getActivityList",
    params,
  });
}

export function getActivityDestails(params) {
  return service({
    method: "get",
    url: "/school/getActivityDestails",
    params,
  });
}

export function getMoonlightList(params) {
  return service({
    method: "get",
    url: "/school/getMoonlightList",
    params,
  });
}
