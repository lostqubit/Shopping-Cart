import "./Navbar.css";

export default function Navbar() {
	return (
		<nav>
			<div>
				<h2>URBAN FUSION</h2>
				<h3>Shop Smart, Shop Now.</h3>
			</div>
			<div>
				<ul>
					<li>Home</li>
					<li>Shop</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<div>
					<span>Cart </span>
					<span>0</span>
				</div>
			</div>
		</nav>
	);
}
