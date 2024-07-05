import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [addedItem, setAddedItem] = useState(null);

	useEffect(() => {
		if (localStorage.getItem("cart")) {
			setCartItems(JSON.parse(localStorage.getItem("cart")));
		}
	}, []);

	return (
		<>
			<Navbar
				cartItems={cartItems}
				setCartItems={setCartItems}
				addedItem={addedItem}
				setAddedItem={setAddedItem}
			/>
			<Outlet context={[cartItems, setCartItems, setAddedItem]} />
			<Footer />
		</>
	);
}

export default App;
