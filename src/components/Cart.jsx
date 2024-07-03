import { useOutletContext, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";
import "./Cart.css";

export default function Cart() {
	const [cartItems, setCartItems] = useOutletContext();
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
				<p>QUANTITY</p>
				<p>TOTAL</p>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} cartItems={cartItems} setCartItems={setCartItems} />
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

function CartItem({ item, cartItems, setCartItems }) {
	const [cartQuantity, setCartQuantity] = useState(item.quantity);
	useEffect(() => {
		if (cartQuantity === 0) {
			setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
		} else {
			const updatedCart = [...cartItems];
			updatedCart.forEach((cartItem, index) => {
				if (cartItem.id === item.id) updatedCart[index].quantity = cartQuantity;
			});
			setCartItems(updatedCart);
		}
	}, [cartQuantity]);
	return (
		<>
			<div className="cart-item">
				<img src={item.image} />
				<div>
					<p>{item.name}</p>
					<p>&#8377; {Math.round(item.price * 80)}</p>
				</div>
			</div>
			<Quantity cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
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
