export default function checkIfEventIsLive(start, end) {
  const now = new Date();
  return new Date(start) < now && now < new Date(end);
}
