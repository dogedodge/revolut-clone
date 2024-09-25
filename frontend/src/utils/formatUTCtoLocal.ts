/**
 *
 * @param timeStr default format from mysql is like '2024-09-25 07:37:50' in UTC
 */
const formatUTCtoLocal = (timeStr: string) => {
  const utcDate = new Date(timeStr + 'Z');
  const localStr = utcDate.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  console.log(localStr);
  const [datePart, timePart] = localStr.split(', ');
  return `${datePart}, ${timePart}`;
};

export default formatUTCtoLocal;
