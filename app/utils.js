export const convertRunningTime2Minutes = (runningTime) => {
  const runningTimeWithoutM = runningTime.slice(0, -1);

  const [hours, minutes] = runningTimeWithoutM.split("h");

  return Number(hours) * 60 + Number(minutes);
};
