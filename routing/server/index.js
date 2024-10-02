import cors from "cors";
import express from "express";
import products from "./products.json" with { type: "json" };

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
	res.json(products);
});

app.get("/products/:id", (req, res) => {
	const id = parseInt(req.params.id, 10);
	const product = products.find((product) => product.id === id);

	if (product === undefined) {
		res.status(404).end();
		return;
	}

	res.json(product);
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
