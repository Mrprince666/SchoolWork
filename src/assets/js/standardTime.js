export function standardTime(time) {
  const date = new Date(time);
  const year = getZero(date.getFullYear());
  const month = getZero(date.getMonth() + 1);
  const day = getZero(date.getDate());
  return year + "-" + month + "-" + day;
}

export function standardAllTime(time) {
  const date = new Date(time);
  const year = getZero(date.getFullYear());
  const month = getZero(date.getMonth() + 1);
  const day = getZero(date.getDate());
  const hours = getZero(date.getHours());
  const min = getZero(date.getMinutes());
  const sec = getZero(date.getSeconds());
  return year + "-" + month + "-" + day + " " + hours + ":" + min + ":" + sec;
}

function getZero(str) {
  return str <= 9 ? "0" + str : str;
}
