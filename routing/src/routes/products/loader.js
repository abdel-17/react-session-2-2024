export async function productsLoader() {
	const response = await fetch("http://localhost:3000/products");

	if (!response.ok) {
		throw response;
	}

	const products = await response.json();
	return { products };
}
