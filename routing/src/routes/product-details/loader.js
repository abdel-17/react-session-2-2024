export async function productDetailsLoader({ params }) {
	const id = params.id;
	const response = await fetch(`http://localhost:3000/products/${id}`);

	if (!response.ok) {
		throw response;
	}

	const product = await response.json();
	return { product };
}
