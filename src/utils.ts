type StartOrEnd = Date | string;

export default function checkIfEventIsLive(start: StartOrEnd, end: StartOrEnd) {
  const now = new Date();
  return new Date(start) < now && now < new Date(end);
}
