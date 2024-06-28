import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
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
				<div>
					<span>Cart </span>
					<span>0</span>
				</div>
			</div>
		</nav>
	);
}
