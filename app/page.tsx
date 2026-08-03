import data from "./data.json";
import HomePage from "./home-page";

export default function Page() {
  const groups = data?.groups ?? {};
  return <HomePage groups={groups} />;
}
