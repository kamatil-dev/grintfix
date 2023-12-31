export const formatDate = (date: any) => {
  date = new Date(date);
  let diff = (new Date() as any) - date;
  if (diff < 1000) return t("right_now");

  let sec = Math.floor(diff / 1000);
  if (sec < 60) return sec + ` ${t("sec")} ${t("ago")}`;

  let min = Math.floor(sec / 60);
  if (min < 60) return min + ` ${t("min")} ${t("ago")}`;

  let hour = Math.floor(min / 60);
  if (hour < 24) return hour + ` ${t("hour")} ${t("ago")}`;

  let day = Math.floor(hour / 24);
  if (day < 30) return day + ` ${t("day")} ${t("ago")}`;

  let d = date;
  d = [
    "0" + d.getDate(),
    "0" + (d.getMonth() + 1),
    "" + d.getFullYear(),
    "0" + d.getHours(),
    "0" + d.getMinutes(),
  ].map((component) => component.slice(-2));

  return d.slice(0, 3).join("/") + " " + d.slice(3).join(":");
};
