import { useLoaderData, Link, useParams, useOutletContext } from "react-router-dom";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";
import cartIcon from "../assets/cart.svg";
import "./ProductPage.css";
import { useState } from "react";
import Rating from "@mui/material/Rating";

export default function ProductPage() {
	const { category, id } = useParams();
	const { data } = useLoaderData();
	const [cartItems, setCartItems] = useOutletContext();
	return (
		<div className="product-page">
			<p>
				<span>
					<Link
						to={`/products/${
							category === "men's fashion"
								? "men%27s%20fashion"
								: category === "women's fashion"
								? "women%27s%20fashion"
								: category
						}`}
					>
						{category === "men's fashion"
							? "Men's Fashion"
							: category === "women's fashion"
							? "Women's Fashion"
							: category.slice(0, 1).toUpperCase() + category.slice(1)}
					</Link>
				</span>
				<span> &gt; </span>
				<span>{data.title}</span>
			</p>
			<div className="product-content">
				<div>
					<img src={data.image} />
				</div>
				<div>
					<p>{data.title}</p>
					<p>&#8377; {Math.round(data.price * 80)}</p>
					<div className="rating">
						<Rating precision={0.1} value={data.rating.rate} readOnly />
						<p>
							({data.rating.rate} stars) &bull; {data.rating.count} reviews
						</p>
					</div>
					<p>{data.description.slice(0, 1).toUpperCase() + data.description.slice(1)}</p>
					<AddtoCart product={data} cartItems={cartItems} setCartItems={setCartItems} />
				</div>
			</div>
		</div>
	);
}

function AddtoCart({ product, cartItems, setCartItems }) {
	const [quantity, setQuantity] = useState(1);

	const addItem = () => {
		if (quantity > 0) {
			const updatedCart = [];
			let flag = 0;
			for (let item of cartItems) {
				if (item.id === product.id) {
					item.quantity += quantity;
					flag = 1;
				}
				updatedCart.push(item);
			}
			if (!flag)
				updatedCart.push({
					id: product.id,
					name: product.title,
					image: product.image,
					quantity: quantity,
					price: product.price,
				});
			setCartItems(updatedCart);
		}
	};

	return (
		<div className="addToCart">
			<div>
				<img src={minusIcon} onClick={() => (quantity > 0 ? setQuantity((qty) => qty - 1) : null)} />
				<span>{quantity}</span>
				<img src={plusIcon} onClick={() => setQuantity((qty) => qty + 1)} />
			</div>
			<div onClick={addItem}>
				<img src={cartIcon} />
				<p>Add to cart</p>
			</div>
		</div>
	);
}
