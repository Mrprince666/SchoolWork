export function standardTime(time) {
  var date = new Date(time);
  var year = getZero(date.getFullYear());
  var month = getZero(date.getMonth() + 1);
  var day = getZero(date.getDate());
  return year + "-" + month + "-" + day;
}

function getZero(str) {
  return str <= 9 ? "0" + str : str;
}
