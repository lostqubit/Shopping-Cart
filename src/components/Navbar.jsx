import "./Navbar.css";
import { Link } from "react-router-dom";
import checkIcon from "../assets/check.svg";
import closeIcon from "../assets/close.svg";
import deleteIcon from "../assets/delete.svg";
import menuIcon from "../assets/menu.svg";
import mobileCartIcon from "../assets/mobile-cart.svg";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Navbar({ cartItems, setCartItems, addedItem, setAddedItem }) {
	const [isSticky, setIsSticky] = useState(false);
	const isMobile = useMediaQuery("(max-width:850px)");

	const slideIn = () => {
		const currentScroll = document.querySelector("#root").scrollTop;
		if (!isSticky) {
			if (currentScroll > 80) setIsSticky(true);
		} else {
			if (currentScroll <= 80) setIsSticky(false);
		}
	};

	const handleModalClose = (event) => {
		if (event.target.id === "viewCart-btn") {
			setAddedItem(null);
			return;
		}
		if (!event.target.closest(".cart-update") && !event.target.closest(".addToCart-btn")) setAddedItem(null);
	};

	const deleteItem = () => {
		const updatedCart = cartItems.filter((item) => item.id !== addedItem.id);
		localStorage.setItem("cart", JSON.stringify(updatedCart));
		setCartItems(updatedCart);
		setAddedItem(null);
	};

	useEffect(() => {
		if (addedItem) document.addEventListener("click", handleModalClose);
		return () => document.removeEventListener("click", handleModalClose);
	}, [addedItem]);

	useEffect(() => {
		const root = document.querySelector("#root");
		root.addEventListener("scroll", slideIn);
		return () => root.removeEventListener("scroll", slideIn);
	}, [isSticky]);

	return isMobile ? (
		<MobileNavbar
			addedItem={addedItem}
			setAddedItem={setAddedItem}
			deleteItem={deleteItem}
			numItems={cartItems.length}
			isSticky={isSticky}
		/>
	) : (
		<nav className={isSticky ? "sticky" : ""}>
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
			<p onClick={() => setAddedItem(null)}>
				<Link to="/products/all">Continue shopping</Link>
			</p>
		</div>
	);
}

function MobileNavbar({ addedItem, setAddedItem, deleteItem, numItems, isSticky }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = (event) => {
		if (event.target.closest("li")) {
			setMenuOpen(false);
			return;
		}
		if (!event.target.closest(".nav-menu") && !event.target.closest("nav")) setMenuOpen(false);
	};

	useEffect(() => {
		if (menuOpen) document.addEventListener("click", closeMenu);
		return () => document.removeEventListener("click", closeMenu);
	}, [menuOpen]);

	return (
		<>
			<nav className={`nav-mobile${isSticky ? " sticky" : ""}`}>
				<img src={menuOpen ? closeIcon : menuIcon} onClick={() => setMenuOpen((status) => !status)} />
				<div>
					<Link to="/">
						<h2>URBAN FUSION</h2>
						<h3>Shop Smart, Shop Now.</h3>
					</Link>
				</div>
				<div>
					<Link to="/cart">
						<span>{numItems}</span>
						<img src={mobileCartIcon} />
					</Link>
					{addedItem && (
						<CartUpdate
							addedItem={addedItem}
							setAddedItem={setAddedItem}
							numItems={numItems}
							deleteItem={deleteItem}
						/>
					)}
				</div>
			</nav>
			<div className={`nav-menu${menuOpen ? " menu-open" : ""}`}>
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
			</div>
		</>
	);
}
