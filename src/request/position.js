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
