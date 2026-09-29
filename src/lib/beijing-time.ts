const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Shanghai",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export function getBeijingTime(date = new Date()) {
  const parts = formatter.formatToParts(date);
  const hour = parts.find((part) => part.type === "hour")!.value;
  const minute = parts.find((part) => part.type === "minute")!.value;

  return {
    label: `${hour}:${minute}`,
    sleeping: Number(hour) < 8,
  };
}
