import { useLoaderData, useParams, Link } from "react-router-dom";
import "./Products.css";
import { useEffect } from "react";

function ProductsHeader({ category }) {
	let title, text;
	if (category == "all") {
		title = "All Products";
		text =
			"Explore our wide range of top-quality products, designed to meet your every need. From everyday essentials to unique finds, we have something for everyone.";
	} else if (category === "jewellery") {
		title = "Jewellery";
		text = "Exquisite and Timeless Jewellery Selections";
	} else if (category === "electronics") {
		title = "Electronics";
		text = "Cutting-Edge and Innovative Electronics Collections";
	} else if (category === "men's fashion") {
		title = "Men's Fashion";
		text = "Stylish and Trendy Men's Fashion Essentials";
	} else {
		title = "Women's Fashion";
		text = "Modern and Sophisticated Women's Fashion Picks";
	}
	return (
		<div className="products-header">
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
}

export default function Products() {
	const { category } = useParams();
	const { data } = useLoaderData();

	return (
		<>
			<ProductsHeader category={category} />
			<div className="navigation">
				<Link to="/shop">Collections</Link> <span>&gt; </span>
				<span>
					{category === "men's fashion"
						? "Men's Fashion"
						: category === "women's fashion"
						? "Women's Fashion"
						: category.slice(0, 1).toUpperCase() + category.slice(1)}
				</span>
			</div>
			<div className="cards">
				{data.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</>
	);
}

function ProductCard({ product }) {
	let category;
	if (product.category === "electronics") category = product.category;
	else if (product.category === "jewelery") category = "jewellery";
	else if (product.category === "men's clothing") category = "men%27s%20fashion";
	else category = "women%27s%20fashion";
	return (
		<Link to={`/products/${category}/${product.id}`}>
			<div className="card">
				<img src={product.image} />
				<p>{product.title}</p>
				<p>&#8377; {Math.round(product.price * 80)}</p>
			</div>
		</Link>
	);
}
