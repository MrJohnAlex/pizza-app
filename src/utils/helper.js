export function calcMinuteLeft(date) {
  const now = new Date();
  const remainingTime = date - now;
  const minutesLeft = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  return minutesLeft;
}
