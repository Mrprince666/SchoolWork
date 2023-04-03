import service from "./index";

// 获取聊天室列表
export function getRoomList(params) {
  return service({
    method: "get",
    url: "/chat/getUserList",
    params,
  });
}

// 获取对方的信息
export function getOtherList(params) {
  return service({
    method: "get",
    url: "/chat/getuserInfo",
    params,
  });
}

// 获取对方的信息
export function getPositionInfo(params) {
  return service({
    method: "get",
    url: "/chat/getPositionInfo",
    params,
  });
}

// 获取聊天信息
export function getChatList(params) {
  return service({
    method: "get",
    url: "/chat/getChatList",
    params,
  });
}

// 添加聊天消息
export function addChat(data) {
  return service({
    method: "post",
    url: "/chat/addChatMessage",
    data,
  });
}
