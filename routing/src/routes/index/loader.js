import { redirect } from "react-router";

export function indexLoader() {
	return redirect("/products");
}
