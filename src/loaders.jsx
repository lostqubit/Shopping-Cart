export default async function productsLoader({ params }) {
	if (params.category === "all") {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		return { data };
	} else if (params.category === "jewellery") {
		const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
		const data = await response.json();
		return { data };
	} else if (params.category === "electronics") {
		const response = await fetch("https://fakestoreapi.com/products/category/electronics");
		const data = await response.json();
		return { data };
	} else if (params.category === "men's fashion") {
		const response = await fetch("https://fakestoreapi.com/products/category/men%27s%20clothing");
		const data = await response.json();
		return { data };
	} else {
		const response = await fetch("https://fakestoreapi.com/products/category/women%27s%20clothing");
		const data = await response.json();
		return { data };
	}
}

export async function productLoader({ params }) {
	const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
	const data = await response.json();

	return { data };
}
