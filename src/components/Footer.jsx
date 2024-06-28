import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<Newsletter />
			<footer>
				<div>
					<Link to="/">
						<h2>URBAN FUSION</h2>
						<h3>Shop Smart, Shop Now.</h3>
					</Link>
				</div>
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
					<a href="https://github.com/lostqubit" target="_blank">
						<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
						<p>Developed by Surya Prakash (@lostqubit)</p>
					</a>
					<p>&copy; Copyright 2024 Surya Prakash. All rights reserved.</p>
				</div>
			</footer>
		</>
	);
}

function Newsletter() {
	return (
		<div className="newsletter">
			<h2>Don&apos;t Miss Out on Exclusive Deals and Special Discounts!</h2>
			<p>
				Sign up now to receive the latest offers, unique promotions, and insider access directly in your inbox!
			</p>
			<div>
				<input type="text" placeholder="Enter your email" />
				<button>Sign Up</button>
			</div>
			<p>
				By clicking Sign Up you&apos;re confirming that you agree with our <span>Terms and Conditions.</span>
			</p>
		</div>
	);
}
