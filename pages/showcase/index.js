import { getAllItems } from "../../../showcase-data";
import ShowcaseList from "../../components/showcase/showcase-list";

export default function Showcase() {
  const allItems = getAllItems();

  return (
    <div>
      <h1>Showcase Page</h1>
      <ShowcaseList items={allItems} />
    </div>
  );
}
