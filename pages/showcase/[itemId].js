import { useRouter } from "next/router";
import { Fragment } from "react";
import { getItemById } from "../../../showcase-data";

function ItemDetailPage() {
	const router = useRouter();

	const itemId = router.query.itemId;
	const item = getItemById(itemId);

	if (!item) {
		return <p>No item found!</p>;
	}

	return <Fragment m="5rem auto"></Fragment>;
}
export default ItemDetailPage;
