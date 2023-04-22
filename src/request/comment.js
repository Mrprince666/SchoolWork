import service from "./index";

// 发表评论
export function addComment(data) {
  return service({
    method: "post",
    url: "/comment/addComment",
    data,
  });
}

// 首页精选评论
export function selectComment() {
  return service({
    method: "get",
    url: "/comment/choice",
  });
}

// 获取评论的点赞请况
export function getGood(data) {
  return service({
    method: "post",
    url: "/comment/getGood",
    data,
  });
}

// 添加点赞
export function addGood(data) {
  return service({
    method: "post",
    url: "/comment/addGood",
    data,
  });
}

// 收藏点赞
export function deleteGood(data) {
  return service({
    method: "post",
    url: "/comment/deleteGood",
    data,
  });
}

// 获取评论的收藏
export function getCollect(data) {
  return service({
    method: "post",
    url: "/comment/getCollect",
    data,
  });
}

// 添加收藏
export function addCollect(data) {
  return service({
    method: "post",
    url: "/comment/addCollect",
    data,
  });
}

// 删除收藏
export function deleteCollect(data) {
  return service({
    method: "post",
    url: "/comment/deleteCollect",
    data,
  });
}

// 单条评论
export function selectACommnet(params) {
  return service({
    method: "get",
    url: "/comment/selectACommnet",
    params,
  });
}

// 回复评论
export function selectReply(params) {
  return service({
    method: "get",
    url: "/comment/selectReply",
    params,
  });
}

// 添加评论
export function addReply(data) {
  return service({
    method: "post",
    url: "/comment/addReply",
    data,
  });
}

// 删除评论
export function deleteReply(data) {
  return service({
    method: "post",
    url: "/comment/deleteReply",
    data,
  });
}

// 广场评论
export function getComment(params) {
  return service({
    method: "get",
    url: "/comment/getComment",
    params,
  });
}

// 删除comment
export function deleteComment(data) {
  return service({
    method: "post",
    url: "/comment/deleteComment",
    data,
  });
}

// 创作中心的comment
export function getACommnet(params) {
  return service({
    method: "get",
    url: "/comment/getACommnet",
    params,
  });
}

// 修改comment
export function updateComment(data) {
  return service({
    method: "post",
    url: "/comment/updateComment",
    data,
  });
}
