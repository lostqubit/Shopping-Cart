import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ cartItems }) {
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
			</div>
		</nav>
	);
}
