import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			setCartItems(JSON.parse(localStorage.getItem("cart")));
		}
	}, []);

	return (
		<>
			<Navbar cartItems={cartItems} />
			<Outlet context={[cartItems, setCartItems]} />
			<Footer />
		</>
	);
}

export default App;
