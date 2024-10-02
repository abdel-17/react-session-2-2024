import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { indexLoader } from "./routes/index";
import { ProductDetails, productDetailsLoader } from "./routes/product-details";
import { Products, productsLoader } from "./routes/products";

const router = createBrowserRouter([
	{
		path: "/",
		loader: indexLoader,
	},
	{
		path: "/products",
		loader: productsLoader,
		element: <Products />,
	},
	{
		path: "/products/:id",
		loader: productDetailsLoader,
		element: <ProductDetails />,
	},
]);

export function App() {
	return <RouterProvider router={router} />;
}
