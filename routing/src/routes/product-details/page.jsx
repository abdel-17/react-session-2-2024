import { useLoaderData } from "react-router";
import "./styles.css";

export function ProductDetails() {
	const { product } = useLoaderData();
	return (
		<div className="product-details">
			<img src={product.image} alt="" className="product-details__image" />
			<p className="product-details__title">{product.title}</p>
			<button>Buy for {product.price} $</button>
		</div>
	);
}
