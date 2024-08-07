import { useOutletContext, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";
import "./Cart.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Cart() {
	const [cartItems, setCartItems] = useOutletContext();
	const isMobile = useMediaQuery("(max-width:750px)");
	let total = 0;
	let items = 0;
	for (let cartItem of cartItems) {
		total += Math.round(cartItem.quantity * cartItem.price * 80);
		items += cartItem.quantity;
	}
	return (
		<div className="cart">
			<div>
				<h2>Your Cart</h2>
				<p>
					<Link to="/products/all">Continue shopping</Link>
				</p>
			</div>
			<div className="cart-content">
				<p>PRODUCT</p>
				{!isMobile && <p>QUANTITY</p>}
				<p>TOTAL</p>
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						item={item}
						cartItems={cartItems}
						setCartItems={setCartItems}
						isMobile={isMobile}
					/>
				))}
			</div>
			<div>
				<p>
					Subtotal ({items} {items > 1 ? "items" : "item"}): <span>&#8377;{total}</span>
				</p>
				<p>Discounts, Shipping charges calculated at checkout</p>
				<button>Check out</button>
			</div>
		</div>
	);
}

function CartItem({ item, cartItems, setCartItems, isMobile }) {
	const [cartQuantity, setCartQuantity] = useState(item.quantity);

	useEffect(() => {
		if (cartQuantity === 0) {
			const filteredCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
			localStorage.setItem("cart", JSON.stringify(filteredCart));
			setCartItems(filteredCart);
		} else {
			const updatedCart = [...cartItems];
			updatedCart.forEach((cartItem, index) => {
				if (cartItem.id === item.id) updatedCart[index].quantity = cartQuantity;
			});
			localStorage.setItem("cart", JSON.stringify(updatedCart));
			setCartItems(updatedCart);
		}
	}, [cartQuantity]);
	return (
		<>
			<div className="cart-item">
				<img src={item.image} />
				<div>
					<p>
						<Link to={item.link}>{item.name}</Link>
					</p>
					<p>&#8377; {Math.round(item.price * 80)}</p>
					{isMobile && <Quantity cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />}
				</div>
			</div>
			{!isMobile && <Quantity cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />}
			<div>&#8377; {Math.round(cartQuantity * item.price * 80)}</div>
		</>
	);
}

function Quantity({ cartQuantity, setCartQuantity }) {
	return (
		<div className="cart-quantity">
			<img src={minusIcon} onClick={() => (cartQuantity > 0 ? setCartQuantity((qty) => qty - 1) : null)} />
			<span>{cartQuantity}</span>
			<img src={plusIcon} onClick={() => setCartQuantity((qty) => qty + 1)} />
		</div>
	);
}
