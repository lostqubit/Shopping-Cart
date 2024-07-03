import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import { useState } from "react";

function App() {
	const [cartItems, setCartItems] = useState([]);
	return (
		<>
			<Navbar cartItems={cartItems} />
			<Outlet context={[cartItems, setCartItems]} />
			<Footer />
		</>
	);
}

export default App;
