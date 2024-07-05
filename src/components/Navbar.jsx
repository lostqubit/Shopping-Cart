import "./Navbar.css";
import { Link } from "react-router-dom";
import checkIcon from "../assets/check.svg";
import closeIcon from "../assets/close.svg";
import deleteIcon from "../assets/delete.svg";
import { useEffect } from "react";

export default function Navbar({ cartItems, setCartItems, addedItem, setAddedItem }) {
	const handleModalClose = (event) => {
		if (event.target.id === "viewCart-btn") {
			setAddedItem(null);
			return;
		}
		if (!event.target.closest(".cart-update") && !event.target.closest(".addToCart-btn")) setAddedItem(null);
	};
	useEffect(() => {
		if (addedItem) document.addEventListener("click", handleModalClose);
		return () => document.removeEventListener("click", handleModalClose);
	}, [addedItem]);

	const deleteItem = () => {
		const updatedCart = cartItems.filter((item) => item.id !== addedItem.id);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		setCartItems(updatedCart);
		setAddedItem(null);
	};

	return (
		<nav>
			<div>
				<Link to="/">
					<h2>URBAN FUSION</h2>
					<h3>Shop Smart, Shop Now.</h3>
				</Link>
			</div>
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
				<Link to="/cart">
					<span>Cart </span>
					<span>{cartItems.length}</span>
				</Link>
				{addedItem && (
					<CartUpdate
						addedItem={addedItem}
						setAddedItem={setAddedItem}
						numItems={cartItems.length}
						deleteItem={deleteItem}
					/>
				)}
			</div>
		</nav>
	);
}

function CartUpdate({ addedItem, setAddedItem, numItems, deleteItem }) {
	return (
		<div className="cart-update">
			<div>
				<div>
					<img src={checkIcon} />
					<p>Item added to your cart</p>
				</div>
				<img src={closeIcon} onClick={() => setAddedItem(null)} />
			</div>
			<div>
				<div>
					<img src={addedItem.image} />
					<div>
						<p>{addedItem.name}</p>
						<p>
							&#8377;{Math.round(addedItem.price * 80)} x {addedItem.quantity}
							<span> &#8377;{Math.round(addedItem.price * 80) * addedItem.quantity}</span>
						</p>
					</div>
				</div>
				<img src={deleteIcon} onClick={deleteItem} />
			</div>
			<Link to="/cart">
				<button id="viewCart-btn">View Cart ({numItems})</button>
			</Link>
			<p onClick={() => setAddedItem(null)}>Continue shopping</p>
		</div>
	);
}
