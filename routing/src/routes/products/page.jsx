import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import "./styles.css";

export function Products() {
	const { products } = useLoaderData();
	return (
		<div>
			<h1>Products</h1>
			<div className="products-grid">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

function ProductItem({ product }) {
	return (
		<div className="product-card">
			<img src={product.image} alt="" className="product-card__image" />
			<Link to={`/products/${product.id}`} className="product-card__title">
				{product.title}
			</Link>
		</div>
	);
}
